const fs = require("fs");
const path = require("path");

function loadPage(filename) {
  const html = fs.readFileSync(path.resolve(__dirname, "..", filename), "utf8");
  document.documentElement.innerHTML = html;
}

describe("index.html", () => {
  beforeEach(() => {
    loadPage("index.html");
  });

  describe("Page metadata", () => {
    it("has the correct page title", () => {
      expect(document.title).toBe("Recruty - Home");
    });

    it("links to style.css", () => {
      const link = document.querySelector('link[rel="stylesheet"]');
      expect(link).not.toBeNull();
      expect(link.getAttribute("href")).toBe("style.css");
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
      const homeLink = document.querySelector('.nav-links a[href="index.html"]');
      expect(homeLink).not.toBeNull();
      expect(homeLink.textContent).toBe("Home");
    });

    it("has a Company Reviews link pointing to company-reviews.html", () => {
      const link = document.querySelector(
        '.nav-links a[href="company-reviews.html"]'
      );
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Company Reviews");
    });

    it("has a Find Salaries link pointing to find-salaries.html", () => {
      const link = document.querySelector(
        '.nav-links a[href="find-salaries.html"]'
      );
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Find Salaries");
    });

    it("has a Post Job link pointing to post-job.html", () => {
      const link = document.querySelector(
        '.nav-links a[href="post-job.html"]'
      );
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Employers/Post Job");
    });

    it("has a Login link pointing to login.html", () => {
      const link = document.querySelector('.nav-links a[href="login.html"]');
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Login");
    });
  });

  describe("Hero section", () => {
    it("renders the main heading", () => {
      const h1 = document.querySelector(".hero h1");
      expect(h1).not.toBeNull();
      expect(h1.textContent).toBe("Find great places to work");
    });

    it("renders the hero subtitle", () => {
      const p = document.querySelector(".hero p");
      expect(p).not.toBeNull();
      expect(p.textContent).toBe("Get access to millions of company reviews");
    });

    it("contains a search input with the correct placeholder", () => {
      const input = document.querySelector(".search-box input");
      expect(input).not.toBeNull();
      expect(input.getAttribute("placeholder")).toBe(
        "Company name or job title"
      );
      expect(input.getAttribute("type")).toBe("text");
    });

    it("contains a Find Companies button", () => {
      const button = document.querySelector(".search-box button");
      expect(button).not.toBeNull();
      expect(button.textContent).toBe("Find Companies");
    });

    it("contains a salaries link", () => {
      const link = document.querySelector(".hero .link");
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Do you want to search for salaries?");
    });
  });

  describe("Industries section", () => {
    it("renders the section heading", () => {
      const h2 = document.querySelector(".industries h2");
      expect(h2).not.toBeNull();
      expect(h2.textContent).toBe("Browse companies by industry");
    });

    it("renders exactly 6 industry cards", () => {
      const cards = document.querySelectorAll(".industry-card");
      expect(cards).toHaveLength(6);
    });

    it("includes Aerospace & Defense card", () => {
      const cards = Array.from(document.querySelectorAll(".industry-card"));
      const texts = cards.map((c) => c.textContent.trim());
      expect(texts).toContain("Aerospace & Defense");
    });

    it("includes Agriculture card", () => {
      const cards = Array.from(document.querySelectorAll(".industry-card"));
      const texts = cards.map((c) => c.textContent.trim());
      expect(texts).toContain("Agriculture");
    });

    it("includes Education card", () => {
      const cards = Array.from(document.querySelectorAll(".industry-card"));
      const texts = cards.map((c) => c.textContent.trim());
      expect(texts).toContain("Education");
    });

    it("includes all expected industry names", () => {
      const cards = Array.from(document.querySelectorAll(".industry-card"));
      const texts = cards.map((c) => c.textContent.trim());
      const expected = [
        "Aerospace & Defense",
        "Agriculture",
        "Arts, Entertainment & Recreation",
        "Construction, Repair & Maintenance",
        "Education",
        "Energy, Mining & Utilities",
      ];
      expected.forEach((name) => expect(texts).toContain(name));
    });

    it("renders a See all industries link", () => {
      const link = document.querySelector(".industries .link");
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("See all industries");
    });
  });

  describe("Page structure", () => {
    it("contains a header element", () => {
      expect(document.querySelector("header")).not.toBeNull();
    });

    it("contains a nav element inside the header", () => {
      expect(document.querySelector("header nav")).not.toBeNull();
    });

    it("has a hero section element", () => {
      expect(document.querySelector("section.hero")).not.toBeNull();
    });

    it("has an industries section element", () => {
      expect(document.querySelector("section.industries")).not.toBeNull();
    });
  });
});
