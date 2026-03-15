package com.simplecoding.simpledmsreact.common;


import com.simplecoding.simpledmsreact.dept.dto.DeptDto;
import com.simplecoding.simpledmsreact.dept.entity.Dept;
import com.simplecoding.simpledmsreact.emp.dto.EmpDto;
import com.simplecoding.simpledmsreact.emp.entity.Emp;
import com.simplecoding.simpledmsreact.faq.dto.FaqDto;
import com.simplecoding.simpledmsreact.faq.entity.Faq;
import com.simplecoding.simpledmsreact.filedb.dto.FileDbDto;
import com.simplecoding.simpledmsreact.filedb.entity.FileDb;
import com.simplecoding.simpledmsreact.gallery.dto.GalleryDto;
import com.simplecoding.simpledmsreact.gallery.entity.Gallery;
import com.simplecoding.simpledmsreact.meetingroom.dto.MeetingRoomDto;
import com.simplecoding.simpledmsreact.meetingroom.entity.MeetingRoom;
import com.simplecoding.simpledmsreact.publiccar.dto.PublicCarDto;
import com.simplecoding.simpledmsreact.publiccar.entity.PublicCar;
import com.simplecoding.simpledmsreact.qna.dto.QnaDto;
import com.simplecoding.simpledmsreact.qna.entity.Qna;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;



@Mapper(componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE  // null 제외 기능(update 시 사용)
)
public interface MapStruct {

    // TODO: 1) Dept <-> DeptDto
    DeptDto toDto(Dept dept);
    Dept toEntity(DeptDto deptDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
    void updateFromDto(DeptDto deptDto, @MappingTarget Dept dept);

    // TODO: 2) Emp <-> EmpDto
    @Mapping(source = "dept.dno", target = "dno")
    EmpDto toDto(Emp emp);
    @Mapping(source = "dno", target = "dept.dno")
    Emp toEntity(EmpDto empDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
//      경고 무시하고 싶으면 아래 추가하세요
    @Mapping(target = "dept", ignore = true)
    void updateFromDto(EmpDto empDto, @MappingTarget Emp emp);

    // TODO: 3) Faq <-> FaqDto
    FaqDto toDto(Faq faq);
    Faq toEntity(FaqDto faqDto);
    void updateFromDto(FaqDto faqDto, @MappingTarget Faq faq);

    // TODO: 4) Qna <-> QnaDto
    QnaDto toDto(Qna qna);
    Qna toEntity(QnaDto qnaDto);
    void updateFromDto(QnaDto qnaDto, @MappingTarget Qna qna);


    //    TODO: 7) fileDb <-> fileDto
    FileDbDto toDto(FileDb fileDb);
    FileDb toEntity(FileDbDto fileDbDto);

    //    TODO: 8) gallery <-> galleryDto
    GalleryDto toDto(Gallery gallery);
    Gallery toEntity(GalleryDto galleryDto);

    // TODO: 13) MeetingRoom <-> MeetingRoomDto
    MeetingRoomDto toDto(MeetingRoom meetingRoom);
    MeetingRoom toEntity(MeetingRoomDto meetingRoomDto);
    void updateFromDto(MeetingRoomDto meetingRoomDto, @MappingTarget MeetingRoom meetingRoom);


    // TODO: 15) PublicCar <-> PublicCarDto
    PublicCarDto toDto(PublicCar publicCar);
    PublicCar toEntity(PublicCarDto publicCarDto);
    void updateFromDto(PublicCarDto publicCarDto, @MappingTarget PublicCar publicCar);
}
