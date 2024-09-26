# 1. 현재 mpsql에 있는 데이터베이스를 조회
show databases;

# 2. 내가 사용할 데이터베이스 생성
create database nodejs;



# 3. 내가 사용할 데이터베이스 선택!
# mysql을 껐다 킬때마다 반드시 해줄것! ->해줘야 db를 사용할수 있다.
use nodejs;

# 4. 테이블 생성
create table member(id varchar(50), pw varchar(50), nick varchar(50));

# 5. 데이터 검색
select * from member;

# 6. 데이터 삽입
insert into member values ("test", "1234", "고나은");

# 7. 데이터 수정

update member set nick = '임명진' where id = 'test';

# 8. 데이터 삭제

delete from member where id = 'test';