import { IonInput, IonItem, IonLabel, IonNote } from "@ionic/react";
import { useState } from "react";

const Input: React.FC<{
  inputName: String;
  placeholder: string;
  onChange: any;
}> = ({ inputName, placeholder, onChange }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateInput = (input: string) => {
    return input.match(/^[\w-_ ]{1,}$/);
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validateInput(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  return (
    <IonItem
      className={`${isValid && "ion-valid"} ${
        isValid === false && "ion-invalid"
      } ${isTouched && "ion-touched"}`}
    >
      <IonLabel position="floating">{inputName}</IonLabel>
      <IonInput
        placeholder={placeholder}
        onIonChange={(e) => onChange(e.detail.value!)}
        onIonInput={(e) => validate(e)}
        onIonBlur={() => setIsTouched(false)}
        onIonFocus={() => setIsTouched(true)}
      ></IonInput>
      <IonNote slot="error">Invalid format</IonNote>
    </IonItem>
  );
};

export default Input;
