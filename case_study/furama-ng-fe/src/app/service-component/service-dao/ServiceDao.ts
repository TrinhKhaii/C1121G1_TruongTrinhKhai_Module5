import {IService} from "../service-model/IService";

export class ServiceDao {
  public static serviceList: IService[] = [
    {
      serviceId: 1,
      serviceCode: "DV-001",
      serviceName: "Villa 1",
      serviceArea: 10000,
      serviceCost: 400000,
      serviceMaxPeople: 4,
      standardRoom: "Diamond",
      descritionOtherConvenience: "Tâm baby",
      poolArea: 50,
      numberOfFloors: 3,
      freeServiceInclude: "",
      deleteFlag: false,
      rentType: "Day",
      serviceType: "Villa",
      serviceImg: "https://cdn-bkjpa.nitrocdn.com/ghAQGqPLBEaMatVQCBBqAopRiSuwvyyh/assets/static/optimized/rev-8e7f025/wp-content/uploads/2021/06/kinh-doanh-resort.jpg",
      serviceDescription: "Villa 1 là 1 trong những villa víp nhất tại đây."
    },
    {
      serviceId: 2,
      serviceCode: "DV-002",
      serviceName: "Villa 2",
      serviceArea: 10000,
      serviceCost: 400000,
      serviceMaxPeople: 4,
      standardRoom: "Diamond",
      descritionOtherConvenience: "Tâm baby",
      poolArea: 50,
      numberOfFloors: 3,
      freeServiceInclude: "",
      deleteFlag: false,
      rentType: "Hour",
      serviceType: "Villa",
      serviceImg: "https://nhadepso.com/wp-content/uploads/2021/09/resort-la-gi_nhadepso.jpg",
      serviceDescription: "Villa 2 là 1 trong những villa víp nhất tại đây."
    },
    {
      serviceId: 3,
      serviceCode: "DV-003",
      serviceName: "Villa 3",
      serviceArea: 20000,
      serviceCost: 430000,
      serviceMaxPeople: 4,
      standardRoom: "Diamond",
      descritionOtherConvenience: "Tâm baby",
      poolArea: 50,
      numberOfFloors: 2,
      freeServiceInclude: "",
      deleteFlag: false,
      rentType: "Day",
      serviceType: "Villa",
      serviceImg: "https://fusionhotelgroup.com/wp-content/uploads/2019/04/Fusion-Resort-Quang-Binh-Dong-Hoi-outdoor-1.jpg",
      serviceDescription: "Villa 3 là 1 trong những villa víp nhất tại đây."
    },
  ];

  getServiceInfor(id: number): any {
    for (let service of ServiceDao.serviceList) {
      if (service.serviceId == id) {
        return service;
      }
    }
  }

}
