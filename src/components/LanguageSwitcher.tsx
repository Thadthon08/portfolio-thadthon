//  Create DROPDAWN component with language switcher
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"icon"}>
          {selectedLanguage === "en" ? (
            <>
              <img
                src="./flags/flag-us-svgrepo-com.svg"
                alt="English"
                className=" h-4 w-4"
              />
            </>
          ) : (
            <>
              <img
                src="./flags/flag-th-svgrepo-com.svg"
                alt="Thai"
                className=" h-4 w-4"
              />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          <img
            src="./flags/flag-us-svgrepo-com.svg"
            alt="English"
            className="mr-2 h-4 w-4"
          />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("th")}>
          <img
            src="./flags/flag-th-svgrepo-com.svg"
            alt="Thai"
            className="mr-2 h-4 w-4"
          />
          Thai
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
