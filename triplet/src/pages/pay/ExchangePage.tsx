import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../../features/navigation/naviSlice';
import BackHeader from '../../components/header/BackHeader';
import { ReactComponent as USFlag } from '../../assets/pay/us.svg';
import { ReactComponent as EUFlag } from '../../assets/pay/eu.svg';
import { ReactComponent as JPFlag } from '../../assets/pay/jp.svg';
import { ReactComponent as CHFlag } from '../../assets/pay/ch.svg';
import { ReactComponent as UKFlag } from '../../assets/pay/uk.svg';
import { ReactComponent as SWFlag } from '../../assets/pay/sw.svg';
import { ReactComponent as CAFlag } from '../../assets/pay/ca.svg';
import { ReactComponent as KRFlag } from '../../assets/pay/kr.svg';
import { ReactComponent as DownArrow } from '../../assets/pay/downArrow.svg';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';


const s = {
  Container: styled.div`
    margin-top: 56px;
    height: 100vh;
    padding: 0 16px;
    /* padding-bottom: 56px; */
  `,
  Title: styled.span`
    font-size: 14px;
    font-weight: 500;
    margin-left: 8px;
  `,
  TitleArea: styled.div`
    display: flex;
    align-items: center;
  `,
  Caption: styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #666666;
  `,
  USFlag: styled(USFlag)`
    width: 24px;
  `,
  EUFlag: styled(EUFlag)`
    width: 24px;
  `,
  JPFlag: styled(JPFlag)`
    width: 24px;
  `,
  CHFlag: styled(CHFlag)`
    width: 24px;
  `,
  UKFlag: styled(UKFlag)`
    width: 24px;
  `,
  SWFlag: styled(SWFlag)`
    width: 24px;
  `,
  CAFlag: styled(CAFlag)`
    width: 24px;
  `,
  KRFlag: styled(KRFlag)`
    width: 24px;
  `,
  InputArea: styled.div`
    width: 100%;
    display: flex;
    `,
  ExchangeInput: styled.input`
    font-size: 14px;
    font-weight: 500;
    background-color: #F9FAFC;
    border: solid 1px #F0F0F0;
    border-radius: 10px;
    height: 44px;
    width: 100%;
    padding: 0 16px;
  `,
    BtnArea: styled.div`
    display: flex;
    position: fixed;
    bottom: 84px;
    width: 100%;
    left: 0;
    right: 0;    
  `,
    PayBtn: styled.button`
    width:100%;
    height:44px;
    color : white;
    background-color : #008DE7;
    border-radius : 10px;
    border : none;
    box-sizing: border-box;
    margin: 0 16px;
    padding : 14px;
  `,
}

const ExchangePage = () => {
  const dispatch = useDispatch();
  // 외화지갑 페이지에서 넘어온 id 저장
  const { accountId } = useParams();

  const { data: foreignDetailData, 
		error: foreignDetailError, 
		loading: foreignDetailLoading, 
		status: foreignDetailStatus, 
		refetch: foreignDetailRefetch } = useAxios(`/account/${accountId}`, 'GET');

  const { data: accountData, 
    error: accountError, 
    loading: accountLoading, 
    status: accountStatus, 
    refetch: accountRefetch } = useAxios(`/account`, 'GET');

  useEffect(() => {
    const fetchData = async () => {
			try {
        await Promise.all([
          accountRefetch(),     // 원화계좌 API 요청
          foreignDetailRefetch(),  // 외화계좌 API 요청
        ]);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(pageMove("pay"));
  }, []);

  const nation:string = "대한민국"
  const from = "일본"
  const to:string = foreignDetailData?.data?.accountName

  const [ fromAmount, setFromAmount ] = useState<any>('0');
  const [ toAmount, setToAmount ] = useState<any>('0');

  const fromOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setFromAmount(value);
  };

  const toOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToAmount(value);
  };

  useEffect(() => {
    if (fromAmount === '' || isNaN(fromAmount)) {
      setFromAmount('0')
    } else {
      setFromAmount(Number(fromAmount))
    }
    if (Number(fromAmount)*10 !== Number(toAmount)) {
      setToAmount(Number(fromAmount)*10)
    }
  }, [fromAmount])

  useEffect(() => {
    if (toAmount === '' || isNaN(toAmount)) {
      setToAmount('0')
    } else {
      setToAmount(Number(toAmount))
    }
    if (Number(fromAmount)*10 !== Number(toAmount)) {
      setFromAmount(Math.floor(Number(toAmount)/10))
    }
  }, [toAmount])

  // 환전 요청 바디
  const requestBody = {
    targetCurrency: foreignDetailData?.data?.currency,
    sourceCurrency: "KRW",
    sourceAmount: fromAmount,
  };

  const { data: exchangeData, 
    error: exchangeError, 
    loading: exchangeLoading, 
    status: exchangeStatus, 
    refetch: exchangeRefetch } = useAxios(`/exchange`, 'POST', requestBody);

  return(
    <>
    <BackHeader title='환전'/>
    <s.Container>
      <s.TitleArea>
        {(() => {
          switch (nation) {
            case "미국":
              return <><s.USFlag/><s.Title>미국 달러(USD)</s.Title></>
            case "유럽":
              return <><s.EUFlag/><s.Title>유럽 유로(EUR)</s.Title></>
            case "일본":
              return <><s.JPFlag/><s.Title>일본 엔(JPY)</s.Title></>
            case "중국":
              return <><s.CHFlag/><s.Title>중국 위안(CNY)</s.Title></>
            case "영국":
              return <><s.UKFlag/><s.Title>영국 파운드(GBP)</s.Title></>
            case "스위스":
              return <><s.SWFlag/><s.Title>스위스 프랑(CHF)</s.Title></>
            case "캐나다":
              return <><s.CAFlag/><s.Title>캐나다 달러(CAD)</s.Title></>
            case "대한민국":
              return <><s.KRFlag/><s.Title>대한민국 원(KRW)</s.Title></>
          }
        }) ()}
      </s.TitleArea>
      <s.Caption>보유 {accountData?.data?.accountBalance} {accountData?.data?.currency}</s.Caption>
      <s.InputArea><s.ExchangeInput onChange={fromOnChange} value={fromAmount}/></s.InputArea>
      
      <DownArrow/>

      <s.TitleArea>
        {(() => {
          switch (to) {
            case "미국":
              return <><s.USFlag/><s.Title>미국 달러(USD)</s.Title></>
            case "유럽":
              return <><s.EUFlag/><s.Title>유럽 유로(EUR)</s.Title></>
            case "일본":
              return <><s.JPFlag/><s.Title>일본 엔(JPY)</s.Title></>
            case "중국":
              return <><s.CHFlag/><s.Title>중국 위안(CNY)</s.Title></>
            case "영국":
              return <><s.UKFlag/><s.Title>영국 파운드(GBP)</s.Title></>
            case "스위스":
              return <><s.SWFlag/><s.Title>스위스 프랑(CHF)</s.Title></>
            case "캐나다":
              return <><s.CAFlag/><s.Title>캐나다 달러(CAD)</s.Title></>
            case "대한민국":
              return <><s.KRFlag/><s.Title>대한민국 원(KRW)</s.Title></>
          }
        }) ()}
      </s.TitleArea>
      <s.Caption>보유 {foreignDetailData?.data?.accountBalance} {foreignDetailData?.data?.currency}</s.Caption>
      <s.InputArea><s.ExchangeInput onChange={toOnChange} value={toAmount}/></s.InputArea>
        <s.BtnArea>
          <s.PayBtn onClick={() => {exchangeRefetch()}}>충전하기</s.PayBtn>
        </s.BtnArea>
    </s.Container>
    </>
  );
};

export default ExchangePage;