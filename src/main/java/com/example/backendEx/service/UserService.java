package com.example.backendEx.service;

import com.example.backendEx.mapper.UserMapper;
import com.example.backendEx.model.BoardVO;
import com.example.backendEx.model.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    public List<Map<String, Object>> selectAllUser() {
        return userMapper.selectAllUser();
    }
    public Map<String, Object> getUser(int idx) {
        return userMapper.getUser(idx);
    }
    public String insertBoard(BoardVO boardVO) {
        userMapper.insertBoard(boardVO);
        return "성공";
    }

    public int join(UserVO userVO){
        return userMapper.join(userVO);
    }

}
