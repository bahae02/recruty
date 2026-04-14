const fs = require("fs");
const path = require("path");

function loadPage(filename) {
  const html = fs.readFileSync(path.resolve(__dirname, "..", filename), "utf8");
  document.documentElement.innerHTML = html;
}

describe("login.html", () => {
  beforeEach(() => {
    loadPage("login.html");
  });

  describe("Page metadata", () => {
    it("has the correct page title", () => {
      expect(document.title).toBe("Recruty - Login");
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

    it("has a Login link pointing to login.html", () => {
      const link = document.querySelector('.nav-links a[href="login.html"]');
      expect(link).not.toBeNull();
      expect(link.textContent).toBe("Login");
    });
  });

  describe("Login form", () => {
    it("renders the login heading", () => {
      const h2 = document.querySelector("main h2");
      expect(h2).not.toBeNull();
      expect(h2.textContent).toBe("Connexion");
    });

    it("contains a form element", () => {
      expect(document.querySelector("main form")).not.toBeNull();
    });

    it("contains an email input", () => {
      const emailInput = document.querySelector('input[type="email"]');
      expect(emailInput).not.toBeNull();
    });

    it("email input has id 'email'", () => {
      const emailInput = document.querySelector("#email");
      expect(emailInput).not.toBeNull();
      expect(emailInput.getAttribute("type")).toBe("email");
    });

    it("email input is required", () => {
      const emailInput = document.querySelector('input[type="email"]');
      expect(emailInput).not.toBeNull();
      expect(emailInput.required).toBe(true);
    });

    it("has a label associated with the email input", () => {
      const label = document.querySelector('label[for="email"]');
      expect(label).not.toBeNull();
    });

    it("contains a password input", () => {
      const passwordInput = document.querySelector('input[type="password"]');
      expect(passwordInput).not.toBeNull();
    });

    it("password input has id 'password'", () => {
      const passwordInput = document.querySelector("#password");
      expect(passwordInput).not.toBeNull();
      expect(passwordInput.getAttribute("type")).toBe("password");
    });

    it("password input is required", () => {
      const passwordInput = document.querySelector('input[type="password"]');
      expect(passwordInput).not.toBeNull();
      expect(passwordInput.required).toBe(true);
    });

    it("has a label associated with the password input", () => {
      const label = document.querySelector('label[for="password"]');
      expect(label).not.toBeNull();
    });

    it("contains a submit button", () => {
      const button = document.querySelector('button[type="submit"]');
      expect(button).not.toBeNull();
    });

    it("submit button has correct text", () => {
      const button = document.querySelector('button[type="submit"]');
      expect(button).not.toBeNull();
      expect(button.textContent).toBe("Se connecter");
    });
  });

  describe("Page structure", () => {
    it("contains a header element", () => {
      expect(document.querySelector("header")).not.toBeNull();
    });

    it("contains a main element with class form-container", () => {
      expect(document.querySelector("main.form-container")).not.toBeNull();
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
