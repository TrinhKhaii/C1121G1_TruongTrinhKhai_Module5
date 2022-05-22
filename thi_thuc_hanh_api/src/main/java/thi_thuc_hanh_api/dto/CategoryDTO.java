package thi_thuc_hanh_api.dto;
/*
    Created by Trinh Khai
    Date: 20/05/2022
    Time: 14:46
*/


import javax.validation.constraints.NotBlank;

public class CategoryDTO {
    private Integer id;

    @NotBlank(message = "Danh mục không được để trống.")
    private String categoryName;

    public CategoryDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
