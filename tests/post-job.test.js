const fs = require("fs");
const path = require("path");

function loadPage(filename) {
  const html = fs.readFileSync(path.resolve(__dirname, "..", filename), "utf8");
  document.documentElement.innerHTML = html;
}

describe("post-job.html", () => {
  beforeEach(() => {
    loadPage("post-job.html");
  });

  describe("Page metadata", () => {
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

    it("has a Post Job link pointing to post-job.html", () => {
      const link = document.querySelector(
        '.nav-links a[href="post-job.html"]'
      );
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Employers/Post Job");
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

    it("has a Login link pointing to login.html", () => {
      const link = document.querySelector('.nav-links a[href="login.html"]');
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Login");
    });
  });

  describe("Page structure", () => {
    it("contains a header element", () => {
      expect(document.querySelector("header")).not.toBeNull();
    });

    it("contains a main element", () => {
      expect(document.querySelector("main")).not.toBeNull();
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
