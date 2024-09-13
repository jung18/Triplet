package com.ssafy.triplet.travel.controller;

import com.ssafy.triplet.exception.CustomException;
import com.ssafy.triplet.response.ApiResponse;
import com.ssafy.triplet.travel.dto.request.TravelRequest;
import com.ssafy.triplet.travel.dto.response.TravelResponse;
import com.ssafy.triplet.travel.service.TravelService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/travel")
@RequiredArgsConstructor
public class TravelController {

    private final TravelService travelService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<TravelResponse>> createTravel(
            @RequestHeader(name = "Authorization",required = false) String token,
            @RequestPart("data") TravelRequest requestDTO,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        try {
            Long userId = extractAndValidateUser(token);  // 토큰과 회원 확인 로직 호출
            TravelResponse responseDTO = travelService.createTravel(userId, requestDTO, image);
            return ResponseEntity.ok(new ApiResponse<>(HttpStatus.OK.toString(), "여행이 생성되었습니다.", responseDTO));
        } catch (Exception e) {
            return handleException(e);
        }
    }

    @PutMapping("/update/{travelId}")
    public ResponseEntity<ApiResponse<TravelResponse>> updateTravel(
            @RequestHeader(name = "Authorization",required = false) String token,
            @PathVariable Long travelId,
            @RequestPart("data") TravelRequest requestDTO,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        try {
            Long userId = extractAndValidateUser(token);
            if(!userId.equals(requestDTO.getCreatorId())){
                return ResponseEntity.badRequest().body(new ApiResponse<>("T0011", "여행 생성자가 아닙니다."));
            }
            TravelResponse responseDTO = travelService.updateTravel(travelId, requestDTO, image);
            return ResponseEntity.ok(new ApiResponse<>(HttpStatus.OK.toString(), "여행이 수정되었습니다.", responseDTO));
        } catch (Exception e) {
            return handleException(e);
        }
    }

    @DeleteMapping("/delete/{travelId}/{creatorId}")
    public ResponseEntity<ApiResponse<TravelResponse>> deleteTravel(@RequestHeader(name = "Authorization",required = false) String token,
                                                                    @PathVariable Long travelId, @PathVariable Long creatorId) {
        try {
            Long userId = extractAndValidateUser(token);
            if(!userId.equals(creatorId)){
                return ResponseEntity.badRequest().body(new ApiResponse<>("T0011", "여행 생성자가 아닙니다."));
            }
            travelService.deleteTravel(travelId);
            return ResponseEntity.ok(new ApiResponse<>(HttpStatus.OK.toString(), "여행이 삭제되었습니다."));
        } catch (Exception e) {
            return handleException(e);
        }
    }




    // 예외처리 메서드
    private ResponseEntity<ApiResponse<TravelResponse>> handleException(Exception e) {
        if (e instanceof CustomException customException) {
            return ResponseEntity.badRequest().body(new ApiResponse<>(customException.getErrorCode(), customException.getMessage()));
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>("E0000", "서버 에러가 발생했습니다."));
        }
    }

    // 토큰 및 회원 확인 메서드
    private Long extractAndValidateUser(String token) throws CustomException {
//        if (token == null) {
//            throw new CustomException("M0011", "토큰이 비어있습니다.");
//        }
//        long userId = jwtUtil.extractUserId(token.substring(7));
//        MemberResponse member = memberService.getMemberById(userId);
//        if (member == null) {
//            throw new CustomException("M0010", "존재하지 않는 회원입니다.");
//        }
        Long userId = 1L;
        return userId;
    }
}