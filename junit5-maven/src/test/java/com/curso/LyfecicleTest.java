package com.curso;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class LyfecicleTest {
	 
    @BeforeAll
    static void initAll() {
    	System.out.println("BEFOREALL");
    }
 
    @BeforeEach
    void init() {
    	System.out.println("BEFOREEACH");
    }
 
    @Test
    void regular_testi_method() {
    	System.out.println("TEST");
    }
    
    @Test
    void regular_testi_method2() {
    	System.out.println("TEST 2");
    }
 
    @Test
    @Disabled("este tests no se ejecuta")
    void skippedTest() {
    	System.out.println("DISABLED TEST");
    }
 
    @AfterEach
    void tearDown() {
    	System.out.println("AFTEREACH");
    }
 
    @AfterAll
    static void tearDownAll() {
    	System.out.println("AFTERALL");
    }
}