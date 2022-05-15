package product.dto;
/*
    Created by Trinh Khai
    Date: 14/05/2022
    Time: 09:29
*/

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;


public class ProductDTO {
    private Integer id;

    @NotBlank(message = "Name cannot empty.")
    private String name;

    @NotBlank(message = "Manufacturer cannot empty.")
    private String manufacturer;

    @NotBlank(message = "Image url cannot empty.")
    private String imageUrl;

    private Boolean deleteFlag;

    @Valid
    private CategoryDTO categoryDTO;

    public ProductDTO() {
        this.deleteFlag = false;
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

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boolean getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Boolean deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public CategoryDTO getCategoryDTO() {
        return categoryDTO;
    }

    public void setCategoryDTO(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }
}
