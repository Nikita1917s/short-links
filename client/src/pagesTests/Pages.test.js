import { render, screen } from "@testing-library/react";
import AuthPage from "../pages/AuthPage.tsx";
import CreatePage from "../pages/CreatePage.tsx";
import DetailPage from "../pages/DetailPage.tsx";
import LinksPage from "../pages/LinksPage.tsx";
import { MemoryRouter } from "react-router-dom";
import { setTimeout } from "timers/promises";

describe("Auth page TEST", () => {
  test("Auth page", async () => {
    render(<AuthPage />);
    expect(screen.getByTestId("auth-page")).toBeInTheDocument();
  });

  test("Create page", async () => {
    render(
      <MemoryRouter>
        <CreatePage />
      </MemoryRouter>
    );
    expect(screen.getByTestId("create-page")).toBeInTheDocument();
  });

  test("Detail page", async () => {
    render(<DetailPage />);
    setTimeout(() => {
      expect(screen.getByTestId("detail-page")).toBeInTheDocument();
    }, 1000);
  });

  test("Links page", async () => {
    render(<LinksPage />);
    setTimeout(() => {
      expect(screen.getByTestId("links-page")).toBeInTheDocument();
    }, 1000);
  });
});
