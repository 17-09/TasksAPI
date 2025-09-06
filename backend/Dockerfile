# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
ENV ASPNETCORE_URLS=http://0.0.0.0:8080
EXPOSE 8080
# Ensure data folder exists for SQLite
RUN mkdir -p /app/data
VOLUME ["/app/data"]
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "TaskApi.dll"]