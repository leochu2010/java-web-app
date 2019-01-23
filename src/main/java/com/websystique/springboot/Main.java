package com.websystique.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@EnableAutoConfiguration
@SpringBootApplication(scanBasePackages={"com.websystique.springboot"})// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class Main {

	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
//		new SpringApplicationBuilder(Main.class) .properties("datasource.sampleapp.hibernate.dialect=org.hibernate.dialect.MySQLDialect").run(args);
	}
}
