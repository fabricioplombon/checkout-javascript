import { tabs } from "./tabs";
import { Identify } from "./identify.class";

const init = () => {
    const tabsList = document.getElementById("tabs") as HTMLUListElement;
    const tabsContent = document.querySelectorAll(".payment__tab") as NodeList;

    tabs(tabsList, tabsContent);

    const identify = new Identify();
    identify;
};

init();
