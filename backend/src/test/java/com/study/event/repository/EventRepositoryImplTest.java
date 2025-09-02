package com.study.event.repository;

import com.study.event.domain.entity.Event;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@Rollback(false)
class EventRepositoryImplTest {

    @Autowired
    EventRepository eventRepository;

    @Test
    @DisplayName("bulkInsert")
    void bulkInsert() {
        for (int i = 1; i <= 300; i++) {
            Event event = Event.builder()
                    .title("더미 제목 " + i)
                    .description("더미 내용 " + i)
                    .date(LocalDate.now())
                    .image("https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/c34e66ec-0b3d-48be-96eb-c0ffbb6436ec_3.jpg")
                    .build();

            eventRepository.save(event);
        }
    }


}