package product.dto;
/*
    Created by Trinh Khai
    Date: 15/05/2022
    Time: 14:09
*/

import javax.validation.constraints.NotBlank;

public class CategoryDTO {
    private Integer id;

    @NotBlank(message = "Category name cannot empty")
    private String name;

    public CategoryDTO() {
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
}
