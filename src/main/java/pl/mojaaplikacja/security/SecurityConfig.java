package pl.mojaaplikacja.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{

 	@Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .httpBasic().and()
        .logout().and()
        .csrf()
            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
        .authorizeRequests()
            .antMatchers(HttpMethod.POST).authenticated().and()
        .sessionManagement()
        	.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
 
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
        .withUser("admin").password("Polska01").roles("USER").and()
        .withUser("emil").password("Polska02").roles("USER");
    }
}
