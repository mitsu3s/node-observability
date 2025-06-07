import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { PrometheusExporter } from "@opentelemetry/exporter-prometheus";

// Jaegerにトレースを送信するための設定
const traceExporter = new OTLPTraceExporter({
  url: "http://jaeger:4318/v1/traces", // Jaeger OTLP endpoint
});

// Prometheusにメトリクスを送信するための設定
const prometheusExporter = new PrometheusExporter({
  port: 9464,
});

// 収集の中継
const sdk = new NodeSDK({
  serviceName: "node-otel-server",
  traceExporter: traceExporter,
  metricReader: prometheusExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
