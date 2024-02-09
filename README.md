# Create API:

```bash
dotnet new webapi --use-controllers -o API
```

## Adding Nuget packages:

```bash
 dotnet add package Microsoft.EntityFrameworkCore.Sqlite
 dotnet add package Microsoft.EntityFrameworkCore.Design
 dotnet add package Microsoft.EntityFrameworkCore.SqlServer // in this moment not supported in MAC
 dotnet Microsoft.EntityFrameworkCore.Sqlite
 dotnet add package Microsoft.EntityFrameworkCore.Tools
```

## Crate Initial migration:

```bash
dotnet ef migrations add Initial
```

## Update database:

```bash
dotnet ef database update
```

## Api run:

### Dev mode:

```bash
dotnet watch run
```

# Create Client:

```bash
  npm create vite@latest client --template react-ts
```

## Adding packages:

```bash
 npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
