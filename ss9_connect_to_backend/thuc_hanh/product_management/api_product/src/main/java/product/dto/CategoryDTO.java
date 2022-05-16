package product.dto;
/*
    Created by Trinh Khai
    Date: 15/05/2022
    Time: 14:09
*/

import javax.validation.constraints.NotBlank;

public class CategoryDTO {
    private Integer categoryId;

    @NotBlank(message = "Category name cannot empty")
    private String categoryName;

    public CategoryDTO() {
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
