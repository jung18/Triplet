package com.ssafy.triplet.member.service;

import com.ssafy.triplet.auth.jwt.JwtUtil;
import com.ssafy.triplet.member.dto.request.MemberIdRequest;
import com.ssafy.triplet.member.dto.request.SignupRequest;
import com.ssafy.triplet.member.dto.request.SimplePasswordConfirmRequest;
import com.ssafy.triplet.member.dto.request.SimplePasswordRequest;
import com.ssafy.triplet.member.entity.Member;
import com.ssafy.triplet.member.repository.MemberRepository;
import com.ssafy.triplet.response.ApiResponse;
import com.ssafy.triplet.response.CustomErrorCode;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public ApiResponse<?> singUp(SignupRequest request, HttpServletResponse response) {

        // 아이디 중복확인
        Member existMember = memberRepository.findByMemberId(request.getMemberId());
        if (existMember != null) {
            return ApiResponse.isError(CustomErrorCode.ID_ALREADY_REGISTERED);
        }

        // 비밀번호 확인
        if (request.getPasswordConfirm() == null || !request.getPassword().equals(request.getPasswordConfirm())) {
            return ApiResponse.isError(CustomErrorCode.PASSWORD_MISMATCH);
        }

        // 주민번호에서 생일, 성별 꺼내기
        String identificationNumber = request.getIdentificationNumber();
        String birth = identificationNumber.substring(0, 6);

        String lastNum = identificationNumber.substring(6);
        boolean gender = "1".equals(lastNum) || "3".equals(lastNum); // 1: 남, 0: 여

        // 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(request.getPassword());

        Member member = Member.builder()
                .memberId(request.getMemberId())
                .password(encodedPassword)
                .name(request.getName())
                .birth(birth)
                .gender(gender)
                .phoneNumber(request.getPhoneNumber())
                .role("ROLE_USER")
                .build();
        // 회원가입
        memberRepository.save(member);
        // 자동 로그인 처리 (토큰발급)
        autoLogin(request.getMemberId(), response);

        return new ApiResponse<Void>("200", "회원가입 성공");
    }

    public boolean createSimplePassword(SimplePasswordRequest request, String memberId) {
        Member member = memberRepository.findByMemberId(memberId);
        // 간편비밀번호랑 간편비밀번호확인 검증
        if (!request.getNewSimplePassword().equals(request.getNewSimplePasswordConfirm())) {
            return false;
        }
        member.setSimplePassword(request.getNewSimplePassword());
        return true;
    }

    public boolean confirmSimplePassword(SimplePasswordConfirmRequest request, String memberId) {
        // 간편비밀번호 확인: true -> 확인 성공
        Member member = memberRepository.findByMemberId(memberId);
        return request.getSimplePassword().equals(member.getSimplePassword());
    }

    public boolean isDuplicated(MemberIdRequest request) {
        // 아이디 중복검사: true -> 중복
        Member existData = memberRepository.findByMemberId(request.getMemberId());
        return existData != null;
    }

    private void autoLogin(String memberId, HttpServletResponse response) {
        // access, refresh 토큰 발급
        String access = jwtUtil.createJwt("access", memberId, "ROLE_USER", 600000L);
        String refresh = jwtUtil.createJwt("refresh", memberId, "ROLE_USER", 86400000L);

        // 쿠키에 토큰 정보 담기
        response.addCookie(createCookie("Authorization", access));
        response.addCookie(createCookie("Authorization-Refresh", refresh));
    }

    private Cookie createCookie(String key, String value) {
        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(24*60*60);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        return cookie;
    }

}
