package com.example.backendEx.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
public class UserVO {
    private String userName,userId,userPwd,userEmail,userRole,confirm;
    private int userIdx;
    private Timestamp createDate;
}
