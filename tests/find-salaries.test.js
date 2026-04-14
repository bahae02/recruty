const fs = require("fs");
const path = require("path");

function loadPage(filename) {
  const html = fs.readFileSync(path.resolve(__dirname, "..", filename), "utf8");
  document.documentElement.innerHTML = html;
}

describe("find-salaries.html", () => {
  beforeEach(() => {
    loadPage("find-salaries.html");
  });

  describe("Page metadata", () => {
    it("has the correct page title", () => {
      expect(document.title).toBe("Recruty - Find Salaries");
    });

    it("links to style1.css", () => {
      const link = document.querySelector('link[rel="stylesheet"]');
      expect(link).not.toBeNull();
      expect(link.getAttribute("href")).toBe("style1.css");
    });
  });

  describe("Navigation bar", () => {
    it("renders the Recruty logo", () => {
      const logo = document.querySelector(".logo");
      expect(logo).not.toBeNull();
      expect(logo.textContent).toBe("Recruty");
    });

    it("contains exactly 5 navigation links", () => {
      const links = document.querySelectorAll(".nav-links a");
      expect(links).toHaveLength(5);
    });

    it("has a Find Salaries link pointing to find-salaries.html", () => {
      const link = document.querySelector(
        '.nav-links a[href="find-salaries.html"]'
      );
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Find Salaries");
    });
  });

  describe("Salary search section", () => {
    it("renders the section heading", () => {
      const h2 = document.querySelector("main h2");
      expect(h2).not.toBeNull();
      expect(h2.textContent).toBe("Recherchez des salaires");
    });

    it("contains a search form", () => {
      expect(document.querySelector("main form")).not.toBeNull();
    });

    it("has a job title search input with a placeholder", () => {
      const inputs = document.querySelectorAll("main form input[type='text']");
      const placeholders = Array.from(inputs).map((i) =>
        i.getAttribute("placeholder")
      );
      expect(placeholders).toContain("Métier ou poste");
    });

    it("has a location search input with a placeholder", () => {
      const inputs = document.querySelectorAll("main form input[type='text']");
      const placeholders = Array.from(inputs).map((i) =>
        i.getAttribute("placeholder")
      );
      expect(placeholders).toContain("Ville ou région");
    });

    it("has 2 text inputs in the search form", () => {
      const inputs = document.querySelectorAll("main form input[type='text']");
      expect(inputs).toHaveLength(2);
    });

    it("contains a search submit button", () => {
      const button = document.querySelector('main form button[type="submit"]');
      expect(button).not.toBeNull();
      expect(button.textContent).toBe("Rechercher");
    });
  });

  describe("Salary list", () => {
    it("renders a salary list", () => {
      expect(document.querySelector(".salary-list")).not.toBeNull();
    });

    it("renders exactly 3 salary items", () => {
      const items = document.querySelectorAll(".salary-list li");
      expect(items).toHaveLength(3);
    });

    it("includes a web developer salary entry", () => {
      const items = Array.from(document.querySelectorAll(".salary-list li"));
      const texts = items.map((i) => i.textContent.trim());
      expect(texts).toContain("Développeur Web : 2 500 DT/mois");
    });

    it("includes a UX/UI Designer salary entry", () => {
      const items = Array.from(document.querySelectorAll(".salary-list li"));
      const texts = items.map((i) => i.textContent.trim());
      expect(texts).toContain("Designer UX/UI : 2 000 DT/mois");
    });

    it("includes a Project Manager salary entry", () => {
      const items = Array.from(document.querySelectorAll(".salary-list li"));
      const texts = items.map((i) => i.textContent.trim());
      expect(texts).toContain("Chef de Projet : 3 200 DT/mois");
    });
  });

  describe("Page structure", () => {
    it("contains a header element", () => {
      expect(document.querySelector("header")).not.toBeNull();
    });

    it("contains a main element with class salaries", () => {
      expect(document.querySelector("main.salaries")).not.toBeNull();
    });

    it("contains a footer element", () => {
      expect(document.querySelector("footer")).not.toBeNull();
    });

    it("footer contains copyright text", () => {
      const footer = document.querySelector("footer");
      expect(footer).not.toBeNull();
      expect(footer.textContent).toContain("2025 Recruty");
    });
  });
});
