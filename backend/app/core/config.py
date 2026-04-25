from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "SmallBiz Manager API"
    database_url: str = "postgresql://user:password@localhost:5432/smallbiz"
    secret_key: str = "change-this-secret-key"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24

    class Config:
        env_file = ".env"


settings = Settings()
