package com.example.backendEx.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class BoardVO {
    private String username,  title, contents;
    private int views, likes, idx;
}
