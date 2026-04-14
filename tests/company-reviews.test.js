const fs = require("fs");
const path = require("path");

function loadPage(filename) {
  const html = fs.readFileSync(path.resolve(__dirname, "..", filename), "utf8");
  document.documentElement.innerHTML = html;
}

describe("company-reviews.html", () => {
  beforeEach(() => {
    loadPage("company-reviews.html");
  });

  describe("Page metadata", () => {
    it("has the correct page title", () => {
      expect(document.title).toBe("Recruty - Company Reviews");
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

    it("has a Home link pointing to index.html", () => {
      const link = document.querySelector('.nav-links a[href="index.html"]');
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Home");
    });

    it("has a Company Reviews link pointing to company-reviews.html", () => {
      const link = document.querySelector(
        '.nav-links a[href="company-reviews.html"]'
      );
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Company Reviews");
    });
  });

  describe("Reviews section", () => {
    it("renders the section heading", () => {
      const h2 = document.querySelector("main h2");
      expect(h2).not.toBeNull();
      expect(h2.textContent).toBe("Avis sur les entreprises");
    });

    it("renders exactly 2 review cards", () => {
      const reviews = document.querySelectorAll(".review");
      expect(reviews).toHaveLength(2);
    });

    it("renders the TechCorp review with its heading", () => {
      const headings = Array.from(document.querySelectorAll(".review h3"));
      const names = headings.map((h) => h.textContent.trim());
      expect(names).toContain("TechCorp");
    });

    it("renders the DigitalWorks review with its heading", () => {
      const headings = Array.from(document.querySelectorAll(".review h3"));
      const names = headings.map((h) => h.textContent.trim());
      expect(names).toContain("DigitalWorks");
    });

    it("TechCorp review contains descriptive text", () => {
      const techCorpHeading = Array.from(
        document.querySelectorAll(".review h3")
      ).find((h) => h.textContent.trim() === "TechCorp");
      expect(techCorpHeading).not.toBeUndefined();
      const reviewDiv = techCorpHeading.closest(".review");
      expect(reviewDiv.querySelector("p")).not.toBeNull();
      expect(reviewDiv.querySelector("p").textContent.length).toBeGreaterThan(0);
    });

    it("DigitalWorks review contains descriptive text", () => {
      const digitalWorksHeading = Array.from(
        document.querySelectorAll(".review h3")
      ).find((h) => h.textContent.trim() === "DigitalWorks");
      expect(digitalWorksHeading).not.toBeUndefined();
      const reviewDiv = digitalWorksHeading.closest(".review");
      expect(reviewDiv.querySelector("p")).not.toBeNull();
      expect(reviewDiv.querySelector("p").textContent.length).toBeGreaterThan(0);
    });
  });

  describe("Page structure", () => {
    it("contains a header element", () => {
      expect(document.querySelector("header")).not.toBeNull();
    });

    it("contains a main element with class reviews", () => {
      expect(document.querySelector("main.reviews")).not.toBeNull();
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
