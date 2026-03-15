package com.simplecoding.simpledmsreact.gallery.entity;


import com.simplecoding.simpledmsreact.common.BaseTimeEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


@Entity
@Table(name = "TB_GALLERY")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode(of = "uuid", callSuper = false)
public class Gallery extends BaseTimeEntity {
	@Id
	private String uuid;            // 기본키
	private String galleryTitle;    // 제목
	private String galleryFileUrl="https://placehold.co/600x400";  // 파일 다운로드 url
}

