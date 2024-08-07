import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    fallbackLng: "pl",
    debug: false,
    resources: {
        en: {
            translation: {
                sweetalert: {
                    success: "Success!",
                    data_updated: "Data updated",
                },
                inputs: {
                    first_name: "First Name",
                    last_name: "Last Name",
                    password: "Password",
                    r_password: "Repeat Password",
                    account_type: "Account Type",
                    rank: "Rank",
                    address: "Address",
                    no_address: "No address",
                    phone_number: "Phone Number",
                    no_phone_number: "No phone number",
                    description: "Description",
                    no_description: "No description",
                    name: "Name",
                    select_account_type: "Select account type",
                    select_rank: "Select rank",
                    change_image: "Change image",
                    change_profile_image: "Change profile image",
                    search: "Search",
                    name_or_surname: "First name or last name",
                    category_name: "Category name",
                    course_name: "Course name",
                    all_users: "All users",
                    new_users_week: "New users this week",
                    new_users_month: "New users this month",
                    new_users_year: "New users this year",
                    all_courses: "All courses",
                    all_notes: "All notes",
                    all_categories: "All categories",
                    all_sliders: "All sliders",
                },
                buttons: {
                    register: "Register",
                    login: "Login",
                    next: "Next",
                    save: "Save",
                    return: "Return",
                    add_category: "Add category",
                    add_note: "Add note",
                    add_course: "Add course",
                    add_slider: "Add slider",
                },
                login: {
                    forgot_password: "Forgot password?",
                    remember_me: "Remember me",
                    no_account_yet: "No account yet?",
                    register_now: "Register now!",
                    login_through_facebook: "Login through Facebook",
                    login_through_google: "Login through Google",
                    login_through_apple: "Login through Apple",

                    nice_to_see_you: "Nice to see you!",
                    what_will_you_do_today: "What will you do today?",
                },
                register: {
                    or: "Or",
                    register_through_facebook: "Register through Facebook",
                    register_through_google: "Register through Google",
                    register_through_apple: "Register through Apple",
                    complete_register: "Complete registration",
                    student: "Student",
                    teacher: "Teacher",
                },
                titles: {
                    trending_now: "Trending Now",
                    popular_categories: "Popular Categories",
                    see_more: "See more categories",
                    login: "Login",
                    register: "Register",
                    users: "Users",
                    edit_user: "Edit user",
                    courses: "Courses",
                    notes: "Notes",
                    categories: "Categories",
                },
                newsletter: {
                    promo: "Don't miss any promotions,",
                    signup: "Sign up for the Newsletter!",
                    email_prompt: "Enter your email address",
                },
                mobile_app: {
                    title: "Mobile App",
                    description: "Take your courses anywhere on your phone!",
                },
                profile: {
                    profile: "Profile",
                    courses: "Courses",
                    completed_courses: "Completed Courses",
                    wish_list: "Wish List",
                    notes: "Notes",
                    reviews: "Reviews",
                    arrange_a_meeting: "Arrange a Meeting",
                    completed: "Completed!",
                    about_me: "About me",
                },
                settings: {
                    informations: {
                        title: "Informations",
                        description:
                            "Update your profile picture, name, and other information.",
                    },

                    preferences: {
                        title: "Preferences",
                        description: "Customize appearance, theme.",
                    },
                },
                nav: {
                    profile: "Profile",
                    add_course: "Add Course",
                    add_notes: "Add Notes",
                    settings: "Settings",
                    log_out: "Log out",
                    admin_panel: "Admin Panel",
                    calendar: "Calendar",
                    cart: "Cart",
                    notifications: "Notifications",
                    messages: "Messages",
                },
                footer: {
                    about_us: "About Us",
                    download_app: "Download App",
                    contact_us: "Contact Us",
                    terms: "Terms",
                    privacy_policy: "Privacy Policy",
                    tech_support: "Tech Support",
                    cookie_settings: "Cookie Settings",
                },
                courses: {
                    participants: "Participants",
                    duration: "Duration",
                    teacher: "Teacher",
                    price: "Price",
                    level: "Level",
                    language: "Language",
                    ratings: "Ratings",
                    description: "Description",
                    title: "Title",
                    choose_category: "Choose category",
                    add_thumbnail: "Add thumbnail"
                },
            },
        },
        pl: {
            translation: {
                sweetalert: {
                    success: "Sukces!",
                    data_updated: "Dane zaktualizowane",
                },
                inputs: {
                    first_name: "Imię",
                    last_name: "Nazwisko",
                    password: "Hasło",
                    r_password: "Powtórz hasło",
                    account_type: "Typ konta",
                    rank: "Ranga",
                    address: "Adres",
                    no_address: "Brak adresu",
                    phone_number: "Numer telefonu",
                    no_phone_number: "Brak numeru telefonu",
                    description: "Opis",
                    no_description: "Brak opisu",
                    name: "Nazwa",
                    select_account_type: "Wybierz typ konta",
                    select_rank: "Wybierz rangę",
                    change_image: "Zmień obraz",
                    change_profile_image: "Zmień zdjęcie profilowe",
                    search: "Szukaj",
                    name_or_surname: "Imię lub nazwisko",
                    category_name: "Nazwa kategorii",
                    course_name: "Nazwa kursu",
                    all_users: "Wszyscy użytkownicy",
                    new_users_week: "Nowi użytkownicy w tym tygodniu",
                    new_users_month: "Nowi użytkownicy w tym miesiącu",
                    new_users_year: "Nowi użytkownicy w tym roku",
                    all_courses: "Wszystkie kursy",
                    all_notes: "Wszystkie notatki",
                    all_categories: "Wszystkie kategorie",
                    all_sliders: "Wszystkie slidery",
                },
                buttons: {
                    register: "Zarejestruj się",
                    login: "Zaloguj się",
                    next: "Dalej",
                    save: "Zapisz",
                    return: "Powrót",
                    add_category: "Dodaj kategorię",
                    add_note: "Dodaj notatkę",
                    add_course: "Dodaj kurs",
                    add_slider: "Dodaj slider",
                },
                login: {
                    forgot_password: "Zapomniałeś hasła?",
                    remember_me: "Zapamiętaj mnie",
                    no_account_yet: "Nie masz jeszcze konta?",
                    register_now: "Zarejestruj się teraz!",
                    login_through_facebook: "Zaloguj się przez Facebook",
                    login_through_google: "Zaloguj się przez Google",
                    login_through_apple: "Zaloguj się przez Apple",

                    nice_to_see_you: "Miło cię widzieć!",
                    what_will_you_do_today: "Co będziesz dzisiaj robić?",
                },
                register: {
                    or: "Lub",
                    register_through_facebook: "Zarejestruj się przez Facebook",
                    register_through_google: "Zarejestruj się przez Google",
                    register_through_apple: "Zarejestruj się przez Apple",
                    complete_register: "Zakończ rejestrację",
                    student: "Uczeń",
                    teacher: "Nauczyciel",
                },
                titles: {
                    trending_now: "Popularne teraz",
                    popular_categories: "Popularne kategorie",
                    see_more: "Zobacz więcej kategorii",
                    login: "Logowanie",
                    register: "Rejestracja",
                    users: "Użytkownicy",
                    edit_user: "Edytuj użytkownika",
                    courses: "Kursy",
                    notes: "Notatki",
                    categories: "Kategorie",
                },
                newsletter: {
                    promo: "Nie przegap żadnych promocji,",
                    signup: "Zapisz się do Newslettera!",
                    email_prompt: "Wprowadź swój adres email",
                },
                mobile_app: {
                    title: "Aplikacja mobilna",
                    description: "Bierz swoje kursy wszędzie na telefonie!",
                },
                profile: {
                    profile: "Profil",
                    courses: "Kursy",
                    completed_courses: "Ukończone kursy",
                    wish_list: "Lista życzeń",
                    notes: "Notatki",
                    reviews: "Recenzje",
                    arrange_a_meeting: "Umów spotkanie",
                    completed: "Ukończone!",
                    about_me: "O mnie",
                },
                settings: {
                    informations: {
                        title: "Informacje",
                        description:
                            "Zaktualizuj swoje zdjęcie profilowe, nazwę i inne informacje.",
                    },
                    preferences: {
                        title: "Preferencje",
                        description: "Dostosuj wygląd, motyw.",
                    },
                },
                nav: {
                    profile: "Profil",
                    add_course: "Dodaj kurs",
                    add_notes: "Dodaj notatki",
                    settings: "Ustawienia",
                    log_out: "Wyloguj się",
                    admin_panel: "Panel administratora",
                    calendar: "Kalendarz",
                    cart: "Koszyk",
                    notifications: "Powiadomienia",
                    messages: "Wiadomości",
                },
                footer: {
                    about_us: "O nas",
                    download_app: "Pobierz aplikację",
                    contact_us: "Skontaktuj się z nami",
                    terms: "Warunki",
                    privacy_policy: "Polityka prywatności",
                    tech_support: "Wsparcie techniczne",
                    cookie_settings: "Ustawienia plików cookie",
                },
                courses: {
                    participants: "Uczestników",
                    duration: "Czas trwania",
                    teacher: "Prowadzący",
                    price: "Cena",
                    level: "Poziom",
                    language: "Język",
                    ratings: "Ocen",
                    description: "Opis",
                    title: "Tytuł",
                    choose_category: "Wybierz kategorię",
                    add_thumbnail: "Dodaj miniaturkę"
                },
            },
        },
        de: {
            translation: {
                sweetalert: {
                    success: "Erfolg!",
                    data_updated: "Daten aktualisiert",
                },
                inputs: {
                    first_name: "Vorname",
                    last_name: "Nachname",
                    password: "Passwort",
                    r_password: "Passwort wiederholen",
                    account_type: "Kontotyp",
                    rank: "Rang",
                    address: "Adresse",
                    no_address: "Keine Adresse",
                    phone_number: "Telefonnummer",
                    no_phone_number: "Keine Telefonnummer",
                    description: "Beschreibung",
                    no_description: "Keine Beschreibung",
                    name: "Name",
                    select_account_type: "Kontotyp auswählen",
                    select_rank: "Rang auswählen",
                    change_image: "Bild ändern",
                    change_profile_image: "Profilbild ändern",
                    search: "Suchen",
                    name_or_surname: "Vorname oder Nachname",
                    category_name: "Kategoriename",
                    course_name: "Kursname",
                    all_users: "Alle Benutzer",
                    new_users_week: "Neue Benutzer diese Woche",
                    new_users_month: "Neue Benutzer diesen Monat",
                    new_users_year: "Neue Benutzer dieses Jahr",
                    all_courses: "Alle Kurse",
                    all_notes: "Alle Notizen",
                    all_categories: "Alle Kategorien",
                    all_sliders: "Alle Slider",
                },
                buttons: {
                    register: "Registrieren",
                    login: "Anmelden",
                    next: "Weiter",
                    save: "Speichern",
                    return: "Zurück",
                    add_category: "Kategorie hinzufügen",
                    add_note: "Notiz hinzufügen",
                    add_course: "Kurs hinzufügen",
                    add_slider: "Slider hinzufügen",
                },
                login: {
                    forgot_password: "Passwort vergessen?",
                    remember_me: "Angemeldet bleiben",
                    no_account_yet: "Noch kein Konto?",
                    register_now: "Jetzt registrieren!",
                    login_through_facebook: "Mit Facebook anmelden",
                    login_through_google: "Mit Google anmelden",
                    login_through_apple: "Mit Apple anmelden",

                    nice_to_see_you: "Schön, dich zu sehen!",
                    what_will_you_do_today: "Was wirst du heute tun?",
                },
                register: {
                    or: "Oder",
                    register_through_facebook: "Mit Facebook registrieren",
                    register_through_google: "Mit Google registrieren",
                    register_through_apple: "Mit Apple registrieren",
                    complete_register: "Registrierung abschließen",
                    student: "Schüler",
                    teacher: "Lehrer",
                },
                titles: {
                    trending_now: "Aktuell im Trend",
                    popular_categories: "Beliebte Kategorien",
                    see_more: "Mehr Kategorien ansehen",
                    login: "Anmelden",
                    register: "Registrieren",
                    users: "Benutzer",
                    edit_user: "Benutzer bearbeiten",
                    courses: "Kurse",
                    notes: "Notizen",
                    categories: "Kategorien",
                },
                newsletter: {
                    promo: "Verpassen Sie keine Aktionen,",
                    signup: "Melden Sie sich für den Newsletter an!",
                    email_prompt: "Geben Sie Ihre E-Mail-Adresse ein",
                },
                mobile_app: {
                    title: "Mobile App",
                    description:
                        "Nehmen Sie Ihre Kurse überall auf Ihrem Handy mit!",
                },
                profile: {
                    profile: "Profil",
                    courses: "Kurse",
                    completed_courses: "Abgeschlossene Kurse",
                    wish_list: "Wunschliste",
                    notes: "Notizen",
                    reviews: "Bewertungen",
                    arrange_a_meeting: "Ein Treffen vereinbaren",
                    completed: "Abgeschlossen!",
                    about_me: "Über mich",
                },
                settings: {
                    informations: {
                        title: "Informationen",
                        description:
                            "Aktualisieren Sie Ihr Profilbild, Ihren Namen und andere Informationen.",
                    },
                    preferences: {
                        title: "Einstellungen",
                        description: "Erscheinungsbild und Thema anpassen.",
                    },
                },
                nav: {
                    profile: "Profil",
                    add_course: "Kurs hinzufügen",
                    add_notes: "Notizen hinzufügen",
                    settings: "Einstellungen",
                    log_out: "Abmelden",
                    admin_panel: "Admin-Panel",
                    calendar: "Kalender",
                    cart: "Warenkorb",
                    notifications: "Benachrichtigungen",
                    messages: "Nachrichten",
                },
                footer: {
                    about_us: "Über uns",
                    download_app: "App herunterladen",
                    contact_us: "Kontaktieren Sie uns",
                    terms: "Nutzungsbedingungen",
                    privacy_policy: "Datenschutzrichtlinie",
                    tech_support: "Technischer Support",
                    cookie_settings: "Cookie-Einstellungen",
                },
                courses: {
                    participants: "Teilnehmer",
                    duration: "Dauer",
                    teacher: "Lehrer",
                    price: "Preis",
                    level: "Niveau",
                    language: "Sprache",
                    ratings: "Bewertungen",
                    description: "Beschreibung",
                },
            },
        },
    },
});
