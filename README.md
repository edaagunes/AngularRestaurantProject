# Angular ile Restaurant Projesi

🌟Bu proje, Angular ve .NET Core 8 teknolojileri kullanılarak geliştirilmiş, API tabanlı modern bir web uygulamasıdır.
Kullanıcıların resturanta kolayca rezervasyon yapabilmesini, menüdeki ürünleri kategorilerine göre görüntüleyebilmesini ve restaurant hakkında bilgi edinmesi sağlandı.

Admin tarafında yapılan rezervasyonların listelenmesi ve durumlarının güncellenebilmesi, ürün işlemleri, site içerisindeki alanların dinamik güncellenebilmesi sağlandı. Ayrıca, **FluentValidation** kütüphanesi ile kullanıcı giriş doğrulama süreçleri güvence altına alındı.

### 🔮 [Web Site](#web-site)

• Kullanıcılara restaurant hakkında bilgiler verildi.

• Ürünler kategorize edildi. Seçilen kategoriye ait ürünlerin listelenmesi sağlandı.

• Rezervasyon ekleme işlemi gerçekleştirildi.

### 🔎 [Admin](#admin)

- Web sitede bulunan alanların CRUD işlemleri gerçekleştirildi.

  - Ürün kategorileri, DropDown menüsü aracılığıyla listelendi.

   - Rezervasyon durumları, Aktif/Pasif olarak güncellenebilir hale getirildi. Açıklama alanı ise opsiyonel olarak bırakıldı.

- Fluent Validation kütüphanesi kullanılarak veri girişi doğrulama işlemleri düzenlendi.

- Angular'da modal yapısı kullanılarak, admin panelinde kullanıcı deneyimi iyileştirildi. Sayfa yenileme ihtiyacı olmadan dinamik içerik görüntüleme imkanı sağlandı, böylece işlemler daha hızlı ve kullanıcı dostu hale getirildi.

### 🔅 Kullanılan Teknolojiler

<table>
  <td>.NetCore8</td>
  <td>Angular</td>
  <td>Entity Framework</td>
  <td>API</td>
  <td>Fluent Validation</td>
  <td>MSSQL</td>
</table>

### 🔨 Proje Kurulumu

```bash
* Projeyi klonlayın

git clone https://github.com/edaagunes/AngularRestaurantProject.git
cd AngularRestaurantProject

* Server klasörüne giderek gerekli bağımlılıkları yükleyin

cd server
dotnet restore
dotnet run

* Client klasörüne gidip gerekli bağımlılıkları yükleyin

cd client
npm install
ng serve
```
### 🌠 Görseller

#### Web Site
![1](https://github.com/user-attachments/assets/649001a1-119b-4f62-885d-26b1afbd0d95)
![2](https://github.com/user-attachments/assets/9224d8ef-b047-4318-95e9-a0b1405703d6)
![3](https://github.com/user-attachments/assets/d8b8390b-0153-47cc-bf05-2aa27a56daf2)
![4](https://github.com/user-attachments/assets/bba7ff12-fb89-4998-9a51-c429ac691e23)
![5](https://github.com/user-attachments/assets/b3160597-1730-4362-824c-d34e9843592f)
![6](https://github.com/user-attachments/assets/768d170b-e127-4e64-8a15-37cfddca73bf)
![7](https://github.com/user-attachments/assets/3dc3cfa3-c40d-4a84-a20a-5fa9045b1dd6)
![8](https://github.com/user-attachments/assets/a279515f-3f7d-4243-a050-5b9b35b6ae5e)

#### Admin
![9](https://github.com/user-attachments/assets/e67685e0-5a6c-40e4-8073-ee460e57ef86)
![10](https://github.com/user-attachments/assets/175a33ce-4072-4eba-a6ef-d3ad5eed88e5)
![17](https://github.com/user-attachments/assets/d004f90b-4c6c-413b-b98d-6ce9122ea1db)
![11](https://github.com/user-attachments/assets/ed69075f-fb5c-4359-be34-4cd398bd05d7)
![12](https://github.com/user-attachments/assets/9e45b312-15d2-4e59-becd-fabf1933884f)
![13](https://github.com/user-attachments/assets/80dcffcc-080d-4a50-8f9d-083b0bba254e)
![14](https://github.com/user-attachments/assets/b7963a0b-2780-485b-89c8-3034fbc99274)
![15](https://github.com/user-attachments/assets/7d3c2906-4070-4a5f-a376-064a3b0af899)
![18](https://github.com/user-attachments/assets/69ca4cd7-b1df-4cdb-8cbe-bb0ae9a476bb)

![swagger](https://github.com/user-attachments/assets/9c0f7da0-b80a-4e3f-89fd-4bf62ab8651b)








