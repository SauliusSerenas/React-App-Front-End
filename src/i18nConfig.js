import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const translationEn = {
    uNumber: "Number",
    uName: "Name",
    uSurname: "Surname",
    uEmail: "E-mail",
    uAction: "Action",
    language: "language",
    eAdd: "Add employee",
    eEdit: "Edit employee",
    eView: "Employee details",
    eList: "Employee list",
    eBack: "Back to homepage",
    uView: "View",
    uEdit: "Edit",
    uDelete: "Delete",
    uSubmit: "Submit",
    uCancel: "Cancel",
    plchName: "Enter employee name",
    plchSurname: "Enter employee surname",
    plchMail: "Enter employee e-mail"
};

const translationLt = {
    uNumber: "Numeris",
    uName: "Vardas",
    uSurname: "Pavardė",
    uEmail: "El. Paštas",
    uAction: "Veiksmas",
    language: "kalba",
    eAdd: "Pridėti darbuotoją",
    eEdit: "Redaguoti darbuotoją",
    eView: "Darbuotojo aprašas",
    eList: "Darbuotojų sąrašas",
    eBack: " Grįžti į pradžios langą",
    uView: "Peržiūrėti",
    uEdit: "koreguoti",
    uDelete: "Ištrinti",
    uSubmit: "Patvirtinti",
    uCancel: "Atšaukti",
    plchName: "Įveskite darbuotojo vardą",
    plchSurname: "Įveskite darbuotojo pavardę",
    plchMail: "Įveskite darbuotojo el.paštą"
};

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: translationEn},
        lt: {translation: translationLt}
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {escapeValue: false}
});

export {i18n};