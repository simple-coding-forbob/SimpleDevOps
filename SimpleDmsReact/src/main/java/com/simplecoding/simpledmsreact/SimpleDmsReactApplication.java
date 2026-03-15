package com.simplecoding.simpledmsreact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SimpleDmsReactApplication {

    public static void main(String[] args) {
        SpringApplication.run(SimpleDmsReactApplication.class, args);
    }

}
