package thi_thuc_hanh_api.dto;
/*
    Created by Trinh Khai
    Date: 20/05/2022
    Time: 14:47
*/

import thi_thuc_hanh_api.model.Category;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class ArticleDTO {
    private Integer id;

    @NotBlank(message = "Tên bài đăng không được để trống.")
    private String name;

    @NotBlank(message = "Thông tin người bán không được để trống.")
    private String seller;

    @NotBlank(message = "Ngày đăng không được để trống.")
    private String postDate;

    @NotBlank(message = "Địa chỉ không được để trống.")
    private String address;

    @NotNull(message = "Diện tích không được để trống.")
    private Double area;

    @NotNull(message = "Giá không được để trống.")
    private Double price;

    @NotBlank(message = "Loại bài viết không được để trống.")
    private String articleType;

    @NotBlank(message = "Hướng không được để trống.")
    private String direction;

    @NotBlank(message = "Nội dung không được để trống.")
    private String content;

    @NotBlank(message = "Link ảnh không được để trống.")
    private String imageUrl;

    @NotBlank(message = "Trạng thái không được để trống.")
    private String status;

    @Valid
    private CategoryDTO categoryDTO;

    private Boolean deleteFlag;

    public ArticleDTO() {
        setDeleteFlag(false);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public String getPostDate() {
        return postDate;
    }

    public void setPostDate(String postDate) {
        this.postDate = postDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getArticleType() {
        return articleType;
    }

    public void setArticleType(String articleType) {
        this.articleType = articleType;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public CategoryDTO getCategoryDTO() {
        return categoryDTO;
    }

    public void setCategoryDTO(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }

    public Boolean getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Boolean deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
