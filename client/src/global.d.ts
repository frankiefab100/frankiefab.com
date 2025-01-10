// global.d.ts
interface CustomSubstackWidget {
    substackUrl: string;
    placeholder: string;
    buttonText: string;
    theme: string;
    colors: {
        primary: string;
        input: string;
        email: string;
        text: string;
    };
}

interface Window {
    CustomSubstackWidget: CustomSubstackWidget;
}
