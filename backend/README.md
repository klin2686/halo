# Halo Backend

This directory contains the Flask-based backend API for the Halo food-allergy application. It implements user authentication, allergy management, menu processing using Google Gemini, and related data models and utilities.

## How To Run

- **Project root:** Change into the backend directory before running commands

  ```bash
  cd backend
  ```

- **Create virtual environment:** Create a python virtual environment before installing dependencies

  ```bash
  python -m venv .venv
  ```

- **Activate the virtual environment:**

  On Windows:
  ```bash
  .venv\Scripts\activate
  ```

  On macOS/Linux:
  ```bash
  source .venv/bin/activate
  ```

- **Install dependencies:**

  ```bash
  pip install -r requirements.txt
  ```

- **Configure environment variables:**

  Copy `.env.example` to `.env`:
  ```bash
  cp .env.example .env
  ```
  *Note: On windows, use `copy` instead of `cp`*

  Update the values:
  - `GOOGLE_CLIENT_ID` - Your Google OAuth Client ID
  - `GEMINI_API_KEY` - Your Google Gemini API key

- **Seed the database:** Populate the database with initial allergen data (the FDA's big 9 food allergens)

  On Windows:
  ```bash
  python seed_db.py
  ```

  On macOS/Linux:
  ```bash
  python3 seed_db.py
  ```
  *Note: you only need to do this on the first run or after resetting your database*

- **Run the app:** `python run.py` — the API will be available at `http://localhost:5001`

## Files and Structure

- **`run.py`**: App entrypoint — starts the Flask application.
- **`app/`**: Main application package.
  - **`app/__init__.py`**: App factory and blueprint registration.
  - **`app/config.py`**: Configuration object and environment settings.
  - **`app/extensions.py`**: Third-party extensions (DB, migrations, etc.).
  - **`app/models/`**: SQLAlchemy models (`user.py`, `user_allergy.py`, `allergen.py`, `menu_upload.py`).
  - **`app/routes/`**: Blueprint routes (`auth_routes.py`, `allergy_routes.py`, `llm_routes.py`, `health_routes.py`).
  - **`app/utils/`**: Helper modules (`google_oauth.py`, `jwt_utils.py`, `validators.py`).
- **`requirements.txt`**: Python dependencies.
- **`seed_db.py`**: Simple script for populating the database with initial data.

## Key Architectural Details
- **Framework & pattern:** Flask application using blueprints for routes and an app factory pattern.
- **Auth:** JWT-based authentication (access + refresh tokens). Protect API routes with `Authorization: Bearer <token>` header.
- **AI integration:** Menu processing endpoints use Google Gemini to analyze images and text.
- **Separation of concerns:** Routes focus on request/response handling; models encapsulate DB structure; utilities handle external integrations and token management.

## Notes

If you need more details about specific endpoints, see `API_REFERENCE.md` in this directory.
