export function tabs(tabsList: HTMLUListElement, tabsContent: NodeList): void {
    const liElements = tabsList.getElementsByTagName(
        "li",
    ) as HTMLCollectionOf<HTMLLIElement>;

    Array.from(liElements).map((li, i) => {
        handleClick(liElements, tabsContent, li, i);
    });
}

const activeTab = (
    liElements: HTMLCollectionOf<HTMLLIElement>,
    tabsContent: NodeList,
    index: number,
): void => {
    const activeTab = Array.from(liElements)[index];
    activeTab.classList.add("is-active");

    const activeContent = tabsContent[index] as HTMLElement;
    activeContent.classList.add("is-active");
};

const deactivateTabs = (
    liElements: HTMLCollectionOf<HTMLLIElement>,
    tabsContent: NodeList,
): void => {
    Array.from(liElements).map((li) => {
        if (li.classList.contains("is-active")) {
            li.classList.remove("is-active");
        }
    });

    tabsContent.forEach((tabs: Node) => {
        if (tabs instanceof HTMLElement) {
            tabs.classList.remove("is-active");
        }
    });
};

const handleClick = (
    liElements: HTMLCollectionOf<HTMLLIElement>,
    tabsContent: NodeList,
    li: HTMLLIElement,
    i: number,
): void => {
    li.addEventListener("click", (e) => {
        e.preventDefault();

        if (!li.classList.contains("is-active")) {
            deactivateTabs(liElements, tabsContent);
            activeTab(liElements, tabsContent, i);
        }
    });
};
