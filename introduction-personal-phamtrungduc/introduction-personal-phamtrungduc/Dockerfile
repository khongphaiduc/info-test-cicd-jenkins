# Stage 1: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
# Expose cổng 8080 bên trong container
EXPOSE 8080
EXPOSE 8081

# Stage 2: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copy tệp dự án và restore dependencies
COPY ["introduction-personal-phamtrungduc.csproj", "."]
RUN dotnet restore "./introduction-personal-phamtrungduc.csproj"

# Copy toàn bộ mã nguồn và build
COPY . .
WORKDIR "/src/."
RUN dotnet build "introduction-personal-phamtrungduc.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Stage 3: Publish
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "introduction-personal-phamtrungduc.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Stage 4: Final image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "introduction-personal-phamtrungduc.dll"]