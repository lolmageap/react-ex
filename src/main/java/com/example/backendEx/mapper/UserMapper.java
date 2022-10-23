package com.example.backendEx.mapper;

import com.example.backendEx.model.BoardVO;
import com.example.backendEx.model.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface UserMapper {
    public List<Map<String,Object>> selectAllUser();
    public Map<String, Object> getUser(int idx);
    public void insertBoard(BoardVO boardVO);
    public int join(UserVO userVO);
}
