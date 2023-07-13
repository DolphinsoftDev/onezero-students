import React from "react";
import onezeroLogoBlack from "../../assets/onezero-logo-black.svg";
type Props = {};
const termsAndConditionsLink =
  "https://www.onezerobank.com/warehouse/userUploadFiles/Image/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F%20%D7%97%D7%95%D7%93%D7%A9%D7%99%D7%99%D7%9D%20%D7%9E%D7%AA%D7%A0%D7%94%20%D7%91%D7%9E%D7%A1%D7%9C%D7%95%D7%9C%20One%20(1)%5B79%5D.pdf";
export default function Footer({}: Props) {
  return (
    <footer className=" flex flex-col py-4 px-5 items-center  md:justify-between md:px-[4.5rem] ">
      <div className="flex flex-col md:flex-row-reverse md:justify-between  md:w-full ">
        <img
          className="w-[7.5rem] self-end mt-4 mb-4 md:w-40"
          src={onezeroLogoBlack}
          alt="לוגו onezero"
        />
        <p className="md:hidden text-[0.5rem] font-Digibank-Regular text-darkgrey leading-3 opacity-70 my-4 md:text-xs 2xl:text-sm">
          הלוואות - בתוקף עד ליום 30.6.23. ציון שיעור ריבית מתואמת על ההלוואה.
          אי עמידה בפירעון ההלוואה עלול לגרור חיוב בריבית פיגורים והליכי הוצאה
          לפועל. פרסום זה אינו מהווה הצעה ו/או התחייבות למתן הלוואה. אישור
          ההלוואה, סכומה ותנאיה כפופים לתנאי הבנק ולשיקול דעתו הבלעדי של הבנק.
          פיקדונות - בכפוף לתנאי הבנק והפיקדון. בריבית משתנה, בהפקדה חד פעמית
          לשנה, ניתן לשבור את הפיקדון בכל עת ולקבל את הקרן עם 10% מהריבית שיעור
          ריבית מתואמת 4.5%. הפרסום אינו מהווה הצעה לפתיחת פיקדון. בכפוף לתנאי
          הבנק והפיקדון. בנקאות פרטית דיגיטלית- בכפוף לתנאי מסלול One+/One מפורט
          בתעריפון הבנק. 0% עמלת המרת מט"ח בכרטיס- ניתן במסלולים One +One בלבד
          בכפוף לשימוש סביר כמפורט בתעריפון. חודשיים התנסות מתנה במסלול One -
          בכפוף לתנאי מסלול One{" "}
          <a
            className="underline"
            target="_blank"
            href={termsAndConditionsLink}
          >
            ולתקנון המבצע
          </a>
        </p>
        <p className="hidden md:block font-Digibank-Regular text-sm leading-[1.4] text-darkGrey ">
          הלוואות - בתוקף עד ליום 30.6.23. ציון שיעור ריבית מתואמת על ההלוואה.
          אי עמידה בפירעון ההלוואה עלול לגרור חיוב בריבית
          <br />
          פיגורים והליכי הוצאה לפועל. פרסום זה אינו מהווה הצעה ו/או התחייבות
          למתן הלוואה. אישור ההלוואה, סכומה ותנאיה כפופים לתנאי
          <br />
          הבנק ולשיקול דעתו הבלעדי של הבנק.
          <br />
          פיקדונות - בכפוף לתנאי הבנק והפיקדון. בריבית משתנה, בהפקדה חד פעמית
          לשנה, ניתן לשבור את הפיקדון בכל עת ולקבל את הקרן
          <br />
          עם 10% מהריבית שיעור ריבית מתואמת 4.5%. הפרסום אינו מהווה הצעה לפתיחת
          פיקדון. בכפוף לתנאי הבנק והפיקדון.
          <br />
          בנקאות פרטית דיגיטלית- בכפוף לתנאי מסלול One+/One מפורט בתעריפון הבנק.
          0% עמלת המרת מט"ח בכרטיס- ניתן במסלולים One
          <br />
          +One בלבד בכפוף לשימוש סביר כמפורט בתעריפון. חודשיים התנסות מתנה
          במסלול One - בכפוף לתנאי מסלול One{" "}
          <a
            target="_blank"
            className="underline"
            href={termsAndConditionsLink}
          >
            ולתקנון המבצע
          </a>
        </p>
      </div>
      <p className="font-Digibank-Regular text-sm"> בית עובד 5, תל אביב.</p>
    </footer>
  );
}
