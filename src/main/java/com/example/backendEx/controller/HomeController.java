package com.example.backendEx.controller;

import com.example.backendEx.mapper.GoogleVO;
import com.example.backendEx.model.BoardVO;
import com.example.backendEx.model.UserVO;
import com.example.backendEx.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.beans.Encoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class HomeController {

    @Autowired
    private BCryptPasswordEncoder encoder;
    private final UserService userService;

    @RequestMapping("/")
    public List<Map<String,Object>> selectAll(){
        return userService.selectAllUser();
    }

    @GetMapping("/res")
    public Map<String, Object> selectU(int idx){
        return userService.getUser(idx);
    }

//    @GetMapping("/join")
//    public String join(UserVO userVO){
//        //권한 설정
//        userVO.setUserRole("USER");
//        //암호화
//        String encPassword = encoder.encode(userVO.getUserPwd());
//        userVO.setUserPwd(encPassword);
//        //값 확인
//        System.out.println(userVO.toString());
//        return "성공";
//    }

    @PostMapping("/join")
    public Map<String,String> join(@RequestBody UserVO userVO){
        Map<String, String> map = new HashMap<>();
        map.put("state", "NO");
        //권한 설정
        userVO.setUserRole("USER");
        //암호화
        String encPassword = encoder.encode(userVO.getUserPwd());
        userVO.setUserPwd(encPassword);

        int a = userService.join(userVO);
        if (a>0){
        map.put("state" , "OK");
        map.put("message", "회원가입이 성공되었습니다");}
        return map;
    }

    @GetMapping("/login")
    public String login(GoogleVO googleVO){
        System.out.println(googleVO.toString());
        return "";
    }

    @GetMapping("/createBoards")
    public String insertBoard(BoardVO boardVO){
        return userService.insertBoard(boardVO);
    }
}
