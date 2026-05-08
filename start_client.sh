#!/bin/bash
# Script para iniciar el cliente de KIVA

set -e

cd "$(dirname "$0")/src/client/react"

echo "🎨 Iniciando cliente KIVA..."
echo "📍 Directorio: $(pwd)"
echo ""

# Verificar que .env existe
if [ ! -f .env ]; then
    echo "⚠️  Archivo .env no encontrado. Creando desde env.example..."
    cp env.example .env
    echo "✅ Archivo .env creado"
fi

# Verificar que node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias del cliente..."
    npm install
fi

# Detectar si estamos en GitHub Codespaces
if [ -n "$CODESPACES" ]; then
    echo "🐙 Detectado GitHub Codespaces"

    # Verificar que el servidor está corriendo
    if ! curl -s http://localhost:7860 > /dev/null 2>&1; then
        echo "⚠️  ADVERTENCIA: El servidor no parece estar corriendo"
        echo "   Inicia el servidor primero con: ./start_server.sh"
        echo ""
        echo "   ¿Continuar de todos modos? (y/n)"
        read -r response
        if [[ ! "$response" =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi

    echo ""
    echo "🌐 Cliente disponible en: http://localhost:5173"
    echo ""
    echo "📌 IMPORTANTE: Ve a la pestaña 'Ports' en VS Code"
    echo "   y asegúrate de que el puerto 5173 está reenviado"
    echo "   Haz clic en el link del puerto para abrir en el navegador"
    echo ""
    echo "📝 Presiona Ctrl+C para detener el cliente"
    echo ""

    # Iniciar cliente con host 0.0.0.0 para Codespaces
    npm run dev -- --host 0.0.0.0
else
    # Verificar que el servidor está corriendo
    if ! curl -s http://localhost:7860 > /dev/null 2>&1; then
        echo "⚠️  ADVERTENCIA: El servidor no parece estar corriendo"
        echo "   Inicia el servidor primero con: ./start_server.sh"
        echo ""
        echo "   ¿Continuar de todos modos? (y/n)"
        read -r response
        if [[ ! "$response" =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi

    echo "🌐 Cliente disponible en: http://localhost:5173"
    echo "📝 Presiona Ctrl+C para detener el cliente"
    echo ""

    # Iniciar cliente
    npm run dev
fi
