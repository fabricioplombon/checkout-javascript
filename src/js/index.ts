import { tabs } from "./tabs";

const init = () => {
    const tabsList = document.getElementById("tabs") as HTMLUListElement;
    const tabsContent = document.querySelectorAll(".payment__tab") as NodeList;

    tabs(tabsList, tabsContent);
};

init();
