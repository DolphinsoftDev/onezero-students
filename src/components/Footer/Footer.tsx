import React from "react";
import onezeroLogoBlack from "../../assets/onezero-logo-black.svg";
import { ONE_ZERO_USER_AGREEMENT_LINK } from "../../constants/constants";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex flex-col py-4 px-5 items-center md:flex-row-reverse  md:justify-between md:px-[4.5rem] ">
      <img
        className="w-[7.5rem] self-end mt-4 mb-4 md:w-40"
        src={onezeroLogoBlack}
        alt="לוגו onezero"
      />
      <p className="md:hidden text-[0.5rem] font-Digibank-Regular text-darkgrey leading-3 opacity-70 my-4 md:text-xs 2xl:text-sm">
        הלוואות - בתוקף עד ליום 31.5.2023. ציון שיעור ריבית מתואמת על ההלוואה.
        אי עמידה בפירעון ההלוואה
        <br />
        עלול לגרור חיוב בריבית פיגורים והליכי הוצאה לפועל. פרסום זה אינו מהווה
        הצעה ו/או התחייבות למתן
        <br />
        הלוואה. אישור ההלוואה, סכומה ותנאיה כפופים לתנאי הבנק ולשיקול דעתו
        הבלעדי של הבנק.
        <br />
        פיקדונות - בכפוף לתנאי הבנק והפיקדון. בריבית משתנה, בהפקדה חד פעמית
        לשנה, ניתן לשבור את
        <br />
        הפיקדון בכל עת ולקבל את הקרן עם 10% מהריבית שיעור ריבית מתואמת 4.25%.
        הפרסום אינו מהווה
        <br />
        הצעה לפתיחת פיקדון. בכפוף לתנאי הבנק והפיקדון.
        <br />
        בנקאות פרטית דיגיטלית- בכפוף לתנאי מסלול One+/One מפורט בתעריפון הבנק.
        0% עמלת המרת מט"ח
        <br />
        בכרטיס- ניתן במסלולים One +One בלבד בכפוף לשימוש סביר כמפורט בתעריפון.
        חודשיים התנסות מתנה
        <br />
        במסלול One - בכפוף לתנאי מסלול One{"  "}
        <a
          className="underline"
          href={ONE_ZERO_USER_AGREEMENT_LINK}
          target="_blank"
        >
          ולתקנון המבצע.
        </a>
      </p>
      <p className="hidden md:block font-Digibank-Regular text-sm leading-[1.4] text-darkGrey ">
        הלוואות - בתוקף עד ליום 31.5.2023. ציון שיעור ריבית מתואמת על ההלוואה.
        אי עמידה בפירעון ההלוואה עלול לגרור חיוב בריבית
        <br />
        פיגורים והליכי הוצאה לפועל. פרסום זה אינו מהווה הצעה ו/או התחייבות למתן
        הלוואה. אישור ההלוואה, סכומה ותנאיה כפופים לתנאי
        <br />
        הבנק ולשיקול דעתו הבלעדי של הבנק.
        <br />
        פיקדונות - בכפוף לתנאי הבנק והפיקדון. בריבית משתנה, בהפקדה חד פעמית
        לשנה, ניתן לשבור את הפיקדון בכל עת ולקבל את הקרן
        <br />
        עם 10% מהריבית שיעור ריבית מתואמת 4.25%. הפרסום אינו מהווה הצעה לפתיחת
        פיקדון. בכפוף לתנאי הבנק והפיקדון.
        <br />
        בנקאות פרטית דיגיטלית- בכפוף לתנאי מסלול One+/One מפורט בתעריפון הבנק.
        0% עמלת המרת מט"ח בכרטיס- ניתן במסלולים One
        <br />
        +One בלבד בכפוף לשימוש סביר כמפורט בתעריפון. חודשיים התנסות מתנה במסלול
        One - בכפוף לתנאי מסלול One{" "}
        <a
          className="underline"
          href={ONE_ZERO_USER_AGREEMENT_LINK}
          target="_blank"
        >
          ולתקנון המבצע.
        </a>
      </p>
    </footer>
  );
}
