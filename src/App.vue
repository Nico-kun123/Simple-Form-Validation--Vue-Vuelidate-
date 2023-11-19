<template>
  <header>
    <h1>Заполните форму для создания клиента</h1>
  </header>
  <div class="container">
    <div class="form_field">
      <form @submit.prevent="onSubmit">
        <!-- ФИО -->
        <fieldset>
          <legend>ФИО</legend>
          <label for="surname">Фамилия*</label>
          <input type="text" id="surname" v-model="v$.surname.$model" />
          <div v-for="(error, index) in v$.surname.$silentErrors" :key="index">
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>

          <label for="name">Имя*</label>
          <input type="text" id="name" v-model="v$.name.$model" />
          <div v-for="(error, index) in v$.name.$silentErrors" :key="index">
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>

          <label for="second-name">Отчество</label>
          <input type="text" id="second-name" v-model="v$.secondName.$model" />

          <label for="birthday">Дата рождения*</label>
          <input type="date" id="birthday" v-model="v$.birthday.$model" />
          <div v-for="(error, index) in v$.birthday.$silentErrors" :key="index">
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>

          <label for="phone">Телефон*</label>
          <input
            type="tel"
            id="phone"
            placeholder="76543210987"
            v-model="v$.phone.$model"
          />
          <div v-for="(error, index) in v$.phone.$silentErrors" :key="index">
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>

          <label class="gender-label">Пол</label>
          <div class="gender-options">
            <!-- <label for="gender" class="gender-label">Пол</label> -->
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              v-model="v$.gender.$model"
            />
            <label for="male" style="font-weight: normal">Мужской</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              v-model="v$.gender.$model"
            />
            <label for="female" style="font-weight: normal">Женский</label>
          </div>
          <div v-for="(error, index) in v$.gender.$silentErrors" :key="index">
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>

          <br/>
          <label for="customer-group">Группа клиентов*</label>
          <p class="valid">
            Примечание: Для выбора нескольких групп удерживайте клавишу 'Ctrl'
            при клике на каждом элементе
          </p>
          <select
            id="customer-group"
            v-model="v$.customerGroup.$model"
            multiple
          >
            <option value="VIP">VIP</option>
            <option value="Premium">Premium</option>
            <option value="Standard">Standard</option>
          </select>
          <div
            v-for="(error, index) in v$.customerGroup.$silentErrors"
            :key="index"
          >
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>

          <label for="doctor">Лечащий врач</label>
          <select id="doctor" v-model="v$.doctor.$model">
            <option value="">Не выбрано</option>
            <option value="Zaharov">Захаров</option>
            <option value="Chernysheva">Чернышева</option>
          </select>

          <label>
            <input type="checkbox" id="no-sms" v-model="v$.noSms.$model" />
            Не отправлять СМС
          </label>
        </fieldset>

        <!-- МЕСТОПОЛОЖЕНИЕ -->
        <fieldset>
          <legend>Адрес</legend>
          <label for="index">Индекс</label>
          <input type="text" id="index" v-model="v$.index.$model" />

          <label for="country">Страна</label>
          <input type="text" id="country" v-model="v$.country.$model" />

          <label for="region">Область</label>
          <input type="text" id="region" v-model="v$.region.$model" />

          <label for="city">Город*</label>
          <input type="text" id="city" v-model="v$.city.$model" />
          <div v-for="(error, index) in v$.city.$silentErrors" :key="index">
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>

          <label for="street">Улица</label>
          <input type="text" id="street" v-model="v$.street.$model" />

          <label for="house">Дом</label>
          <input type="text" id="house" v-model="v$.house.$model" />
        </fieldset>

        <!-- ДОКУМЕНТ -->
        <fieldset>
          <legend>Документ</legend>
          <label for="document-type">Тип документа*</label>
          <select id="document-type" v-model="v$.documentType.$model">
            <option value="Passport">Паспорт</option>
            <option value="BirthCertificate">Свидетельство о рождении</option>
            <option value="DriverLicense">Вод. удостоверение</option>
          </select>
          <div
            v-for="(error, index) in v$.documentType.$silentErrors"
            :key="index"
          >
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>

          <label for="passport-series">Серия</label>
          <input
            type="text"
            id="passport-series"
            v-model="v$.passportSeries.$model"
          />

          <label for="passport-number">Номер</label>
          <input
            type="text"
            id="passport-number"
            v-model="v$.passportNumber.$model"
          />

          <label for="passport-issued-by">Кем выдан</label>
          <input
            type="text"
            id="passport-issued-by"
            v-model="v$.passportIssuedBy.$model"
          />

          <label for="passport-issue-date">Дата выдачи*</label>
          <input
            type="date"
            id="passport-issue-date"
            v-model="v$.passportIssueDate.$model"
          />
          <div
            v-for="(error, index) in v$.passportIssueDate.$silentErrors"
            :key="index"
          >
            <p class="error">
              {{
                error.$message == ""
                  ? printError(error.$response)
                  : printError(error.$message)
              }}
            </p>
          </div>
        </fieldset>

        <br />
        <div id="button__wrapper">
          <button id="create">Создать</button>
        </div>
      </form>
    </div>
  </div>

  <h1>Показать только важные параметры объекта v$</h1>
  <div class="form_field">
    <div>
      <div>
        <button
          @click="showImportant = !showImportant"
          style="display: flex; justify-content: left; align-items: center"
        >
          Показать
        </button>
      </div>
      <br />

      <div style="width: fit-content; margin: auto">
        <div v-show="showImportant">
          <template
            v-for="field in [
              'surname',
              'name',
              'secondName',
              'birthday',
              'phone',
              'gender',
              'customerGroup',
              'doctor',
              'noSms',
              'index',
              'country',
              'region',
              'city',
              'street',
              'house',
              'documentType',
              'passportSeries',
              'passportNumber',
              'passportIssuedBy',
              'passportIssueDate',
            ]"
          >
            <br />
            <p>{{ field }}: {{ v$[field].$model }}</p>
            <p
              class="error"
              v-if="
                v$[field]?.$errors[0]?.$message ||
                v$[field]?.$errors[0]?.$response ||
                v$[field]?.$silentErrors[0]?.$message ||
                v$[field]?.$silentErrors[0]?.$response
              "
            >
              Ошибки:
              {{
                v$[field]?.$silentErrors[0]?.$message ||
                v$[field]?.$silentErrors[0]?.$response
              }},
              
            </p>
            <p class="valid" v-else>Данные корректны! :)</p>
          </template>
        </div>
      </div>
    </div>
  </div>

  <h1>Показать ВЕСЬ объект v$</h1>
  <div class="form_field">
    <div>
      <div>
        <button @click="showAll = !showAll">Показать</button>
      </div>
      <br />
      <div>
        <pre v-show="showAll">{{ v$ }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "App",
  methods: {
    onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        this.showError = true;
        alert("Заполните корректно все обязательные поля!");
        return;
      }
      alert("Клиент был успешно создан! :)");
    },
    printError(error) {
      switch (error) {
        case "Value is required":
          return "Поле обязательно для заполнения";
        case "This field should be at least 11 characters long":
          return "Поле должно содержать 11 символов";
        case "The maximum length allowed is 11":
          return "Поле должно содержать 11 символов";
        default:
          return error;
      }
    },
  },
  setup() {
    const showAll = ref(false);
    const showImportant = ref(false);

    const rules = {
      surname: {
        required,
      },
      name: {
        required,
      },
      secondName: {},
      birthday: {
        required,
        dateRange(val) {
          const minDate = new Date(1900, 1, 1);
          const maxDate = new Date();
          const date = new Date(val);
          if (date >= minDate && date <= maxDate) return true;
          else
            throw "Дата должна быть в диапазоне от 01.01.1900 до текущей даты";
        },
      },
      phone: {
        regex(val) {
          const regex = /^7[0-9]{10}$/;
          if (regex.test(val)) return true;
          else
            throw "Поле обязательно для заполнения. Формат номера телефона: 11 цифр, начиная с 7";
        },
      },
      gender: {},
      customerGroup: {
        required,
      },
      doctor: {},
      noSms: {},
      index: {},
      country: {},
      region: {},
      city: {
        required,
      },
      street: {},
      house: {},
      documentType: {
        required,
      },
      passportSeries: {},
      passportNumber: {},
      passportIssuedBy: {},
      passportIssueDate: {
        required,
        dateRange(val) {
          const minDate = new Date(1900, 1, 1);
          const maxDate = new Date();
          const date = new Date(val);
          if (date >= minDate && date <= maxDate) return true;
          else
            throw "Дата должна быть в диапазоне от 01.01.1900 до текущей даты";
        },
      },
    };

    const state = reactive({
      number: "",
      surname: "",
      name: "",
      birthday: null,
      phone: "",
      customerGroup: [],
      doctor: "",
      noSms: false,
      index: "",
      country: "",
      region: "",
      city: "",
      street: "",
      house: "",
      documentType: "",
      passportSeries: "",
      passportNumber: "",
      passportIssuedBy: "",
      passportIssueDate: null,
    });

    const v$ = useVuelidate(rules, state);

    return {
      v$,
      showAll,
      showImportant,
    };
  },
};
</script>

<style scoped lang="scss">

// Переменные
$uiGreen: #4caf50;
$uiDarkerGreen: #388e3c;
$mainPadding: 1rem;
$fontSizePhones: 13pt;
$fontSizeTablets: 15pt;
$fontSizeDesktop: 17pt;

.valid,
.valid input {
  color: $uiGreen;
}
.error,
.error input {
  color: red;
}

header {
  line-height: 1.5;
}

h1 {
  margin-top: 2rem;
  text-align: center;
  color: orange;
  font-size: xx-large;

  &:first-child {
    margin: 0;
  }
}

.gender-label {
  // display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.gender-options {
  display: flex;
  gap: 10px;
  width: max-content;
  // margin: 0;
}

fieldset {
  border: 1px solid black;
  border-radius: 20pt;
  padding: $mainPadding;
  margin-right: 2rem;
  width: 100%;
  background-color: lightblue;
}

pre {
  display: flex;
  align-items: center;
}
.form_field {
  display: flex;
  flex-direction: row;
  background-color: beige;
  margin-top: 2rem;
  color: black;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border-radius: 20pt;
}

form {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 600px;

  p {
    margin-bottom: 1rem;
  }
}

legend {
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 10px;
  color: orange;
  background-color: black;
  border-radius: 20pt;
  padding: 2px 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  padding: $mainPadding;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
  &:last-child {
    margin-bottom: 1rem;
  }
}

input[type="checkbox"] {
  width: auto;
}

button {
  padding: $mainPadding;
  background-color: $uiGreen;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  // margin: 0;

  &:hover {
    background-color: $uiDarkerGreen;
  }

  &#create {
    padding: $mainPadding;
    background-color: $uiGreen;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    // margin: auto;
    // margin-left: -15rem;
    width: 100%;

    &:hover {
      background-color: $uiDarkerGreen;
    }
  }
}

#create {
  margin-left: -4rem;
}

#button__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: -4rem;
}

button:hover {
  background-color: $uiDarkerGreen;
}

// Адаптивность для мобильных устройств
@media (max-width: 767px) {
  *:not(h1) {
    font-size: $fontSizePhones;
  }
  form {
    grid-template-columns: 1fr;
  }
  .logo {
    width: 100px;
    height: 100px;
  }
  fieldset {
    margin-right: 0;
  }
  #create {
    margin-left: 4rem;
  }
  input {
    width: 100%;
    margin: auto;
  }

  .gender-options {
    display: flex;
    // flex-direction: column;
    // gap: 10px;
    width: max-content;
    // margin: 0;
  }
}

// Адаптивность для планшетов
@media (min-width: 768px) and (max-width: 1023px) {
  *:not(h1) {
    font-size: $fontSizeTablets;
  }
  form {
    grid-template-columns: repeat(2, 1fr);
  }
  .form_field {
    // border-radius: 0;
  }
  .logo {
    width: 100px;
    height: 100px;
  }
  fieldset {
    // margin-right: 6rem;
    width: 17rem;
  }
  fieldset:last-child {
    margin-right: 0;
  }
  #create {
    margin-left: 2rem;
    width: 70%;
  }
  input {
    width: 100%;
    margin: auto;
  }
}

@media (min-width: 1024px) {
  *:not(h1) {
    font-size: $fontSizeDesktop;
  }
  form {
    grid-template-columns: repeat(3, 1fr);
  }
  .logo {
    width: 125px;
    height: 125px;
  }
  fieldset {
    margin-left: -9rem;
    margin-right: 10rem;
    width: 17rem;
  }
  #create {
    margin: 0;
    margin-left: -15rem;
    width: 70%;
  }
  fieldset:last-child {
    margin-right: 0;
  }
}
</style>
