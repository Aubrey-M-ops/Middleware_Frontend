export const POD_MOCK_DATA = {
  nodes: [
    {
      nodeID: "cloud-cluster-worker-1",
      nodeName: "cloud-worker-1",
      nodeType: "cloud",
      status: "Ready",
      cpu: {
        total: 4,
        used: 2.3,
        percentage: 57.5,
        details: "cpu 123456 12345 1234567 123456 123456 123456 123456 123456",
      },
      memory: {
        total: "8192MB",
        used: "5120MB",
        free: "3072MB",
        percentage: 62.5,
        details: "Mem: 8192 5120 3072 0 0 0",
      },
      network: {
        eth0: {
          rx_bytes: 1234567890,
          tx_bytes: 987654321,
          rx_packets: 123456,
          tx_packets: 654321,
        },
        details: "eth0: 1234567890 123456 987654321 654321 0 0 0 0 0 0",
      },
      storage: {
        total: "100GB",
        used: "45GB",
        free: "55GB",
        percentage: 45.0,
      },
      pods: [
        {
          podID: "universal-agent-abc123",
          podName: "universal-agent-abc123",
          namespace: "default",
          status: "Running",
          podIP: "10.244.1.5",
          nodeIP: "192.168.1.100",
          restartCount: 0,
          age: "2d",
          createdAt: "2023-12-19T10:30:00Z",
          resources: {
            requests: {
              cpu: "50m",
              memory: "64Mi",
            },
            limits: {
              cpu: "100m",
              memory: "128Mi",
            },
            usage: {
              cpu: "45m",
              memory: "58Mi",
            },
          },
          services: [
            {
              serviceID: "agent-monitoring",
              serviceName: "Agent Monitoring Service",
              serviceType: "DaemonSet",
              image: "cloud-edge-agent:latest",
              ports: [],
              env: [
                {
                  name: "BACKEND_URL",
                  value: "http://192.168.9.100:3000",
                },
                {
                  name: "NODE_TYPE",
                  value: "cloud",
                },
                {
                  name: "HEARTBEAT_INTERVAL",
                  value: "30",
                },
              ],
              volumes: [
                {
                  name: "host-proc",
                  mountPath: "/host/proc",
                  readOnly: true,
                },
                {
                  name: "host-sys",
                  mountPath: "/host/sys",
                  readOnly: true,
                },
              ],
              status: "Running",
              startTime: "2023-12-19T10:30:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Heartbeat sent successfully",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Resource monitoring active",
                },
              ],
            },
          ],
        },
        {
          podID: "web-app-def456",
          podName: "web-app-def456",
          namespace: "default",
          status: "Running",
          podIP: "10.244.1.6",
          nodeIP: "192.168.1.100",
          restartCount: 1,
          age: "1d",
          createdAt: "2023-12-20T14:20:00Z",
          resources: {
            requests: {
              cpu: "200m",
              memory: "256Mi",
            },
            limits: {
              cpu: "500m",
              memory: "512Mi",
            },
            usage: {
              cpu: "180m",
              memory: "220Mi",
            },
          },
          services: [
            {
              serviceID: "web-frontend",
              serviceName: "Web Frontend Service",
              serviceType: "Deployment",
              image: "nginx:1.21",
              ports: [
                {
                  containerPort: 80,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "NODE_ENV",
                  value: "production",
                },
              ],
              volumes: [],
              status: "Running",
              startTime: "2023-12-20T14:20:10Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Server started on port 80",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Request processed successfully",
                },
              ],
            },
          ],
        },
        {
          podID: "api-service-ghi789",
          podName: "api-service-ghi789",
          namespace: "default",
          status: "Running",
          podIP: "10.244.1.7",
          nodeIP: "192.168.1.100",
          restartCount: 0,
          age: "3d",
          createdAt: "2023-12-18T09:15:00Z",
          resources: {
            requests: {
              cpu: "300m",
              memory: "512Mi",
            },
            limits: {
              cpu: "1000m",
              memory: "1Gi",
            },
            usage: {
              cpu: "250m",
              memory: "480Mi",
            },
          },
          services: [
            {
              serviceID: "api-backend",
              serviceName: "API Backend Service",
              serviceType: "Deployment",
              image: "node:16-alpine",
              ports: [
                {
                  containerPort: 3000,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "MONGODB_URI",
                  value:
                    "mongodb://admin:123123@mongodb:27017/cloud-edge-platform?authSource=admin",
                },
                {
                  name: "NODE_ENV",
                  value: "production",
                },
              ],
              volumes: [],
              status: "Running",
              startTime: "2023-12-18T09:15:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "API server listening on port 3000",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Database connection established",
                },
              ],
            },
          ],
        },
        {
          podID: "database-jkl012",
          podName: "database-jkl012",
          namespace: "default",
          status: "Running",
          podIP: "10.244.1.8",
          nodeIP: "192.168.1.100",
          restartCount: 0,
          age: "5d",
          createdAt: "2023-12-16T08:00:00Z",
          resources: {
            requests: {
              cpu: "500m",
              memory: "1Gi",
            },
            limits: {
              cpu: "2000m",
              memory: "2Gi",
            },
            usage: {
              cpu: "420m",
              memory: "850Mi",
            },
          },
          services: [
            {
              serviceID: "mongodb-database",
              serviceName: "MongoDB Database Service",
              serviceType: "StatefulSet",
              image: "mongo:6.0",
              ports: [
                {
                  containerPort: 27017,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "MONGO_INITDB_ROOT_USERNAME",
                  value: "admin",
                },
                {
                  name: "MONGO_INITDB_ROOT_PASSWORD",
                  value: "123123",
                },
              ],
              volumes: [
                {
                  name: "mongodb-data",
                  mountPath: "/data/db",
                  readOnly: false,
                },
              ],
              status: "Running",
              startTime: "2023-12-16T08:00:10Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "MongoDB server running on port 27017",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Database queries processed",
                },
              ],
            },
          ],
        },
        {
          podID: "monitoring-mno345",
          podName: "monitoring-mno345",
          namespace: "monitoring",
          status: "Running",
          podIP: "10.244.1.9",
          nodeIP: "192.168.1.100",
          restartCount: 2,
          age: "1d",
          createdAt: "2023-12-20T16:45:00Z",
          resources: {
            requests: {
              cpu: "100m",
              memory: "128Mi",
            },
            limits: {
              cpu: "200m",
              memory: "256Mi",
            },
            usage: {
              cpu: "85m",
              memory: "110Mi",
            },
          },
          services: [
            {
              serviceID: "prometheus-monitoring",
              serviceName: "Prometheus Monitoring Service",
              serviceType: "Deployment",
              image: "prom/prometheus:v2.45.0",
              ports: [
                {
                  containerPort: 9090,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "PROMETHEUS_CONFIG",
                  value: "/etc/prometheus/prometheus.yml",
                },
              ],
              volumes: [
                {
                  name: "prometheus-config",
                  mountPath: "/etc/prometheus",
                  readOnly: true,
                },
                {
                  name: "prometheus-data",
                  mountPath: "/prometheus",
                  readOnly: false,
                },
              ],
              status: "Running",
              startTime: "2023-12-20T16:45:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Prometheus server started",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Metrics collection active",
                },
              ],
            },
          ],
        },
      ],
      timestamp: 1703123456789,
      lastSeen: "2023-12-21T10:30:45.123Z",
    },
    {
      nodeID: "cloud-cluster-worker-2",
      nodeName: "cloud-worker-2",
      nodeType: "cloud",
      status: "Ready",
      cpu: {
        total: 8,
        used: 4.8,
        percentage: 60.0,
        details: "cpu 123456 12345 1234567 123456 123456 123456 123456 123456",
      },
      memory: {
        total: "16384MB",
        used: "8192MB",
        free: "8192MB",
        percentage: 50.0,
        details: "Mem: 16384 8192 8192 0 0 0",
      },
      network: {
        eth0: {
          rx_bytes: 2345678901,
          tx_bytes: 1987654321,
          rx_packets: 234567,
          tx_packets: 765432,
        },
        details: "eth0: 2345678901 234567 1987654321 765432 0 0 0 0 0 0",
      },
      storage: {
        total: "200GB",
        used: "120GB",
        free: "80GB",
        percentage: 60.0,
      },
      pods: [
        {
          podID: "cache-service-vwx234",
          podName: "cache-service-vwx234",
          namespace: "default",
          status: "Running",
          podIP: "10.244.1.10",
          nodeIP: "192.168.1.101",
          restartCount: 0,
          age: "1d",
          createdAt: "2023-12-20T11:00:00Z",
          resources: {
            requests: {
              cpu: "200m",
              memory: "512Mi",
            },
            limits: {
              cpu: "500m",
              memory: "1Gi",
            },
            usage: {
              cpu: "180m",
              memory: "480Mi",
            },
          },
          services: [
            {
              serviceID: "redis-cache",
              serviceName: "Redis Cache Service",
              serviceType: "StatefulSet",
              image: "redis:7-alpine",
              ports: [
                {
                  containerPort: 6379,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "REDIS_PASSWORD",
                  value: "redis123",
                },
              ],
              volumes: [
                {
                  name: "redis-data",
                  mountPath: "/data",
                  readOnly: false,
                },
              ],
              status: "Running",
              startTime: "2023-12-20T11:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Redis server running on port 6379",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Cache operations processed",
                },
              ],
            },
          ],
        },
        {
          podID: "load-balancer-yz3456",
          podName: "load-balancer-yz3456",
          namespace: "default",
          status: "Running",
          podIP: "10.244.1.11",
          nodeIP: "192.168.1.101",
          restartCount: 1,
          age: "2d",
          createdAt: "2023-12-19T14:00:00Z",
          resources: {
            requests: {
              cpu: "100m",
              memory: "128Mi",
            },
            limits: {
              cpu: "200m",
              memory: "256Mi",
            },
            usage: {
              cpu: "85m",
              memory: "110Mi",
            },
          },
          services: [
            {
              serviceID: "nginx-lb",
              serviceName: "Nginx Load Balancer",
              serviceType: "Deployment",
              image: "nginx:1.21",
              ports: [
                {
                  containerPort: 80,
                  protocol: "TCP",
                },
                {
                  containerPort: 443,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "NGINX_CONFIG",
                  value: "/etc/nginx/nginx.conf",
                },
              ],
              volumes: [
                {
                  name: "nginx-config",
                  mountPath: "/etc/nginx",
                  readOnly: true,
                },
              ],
              status: "Running",
              startTime: "2023-12-19T14:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Load balancer active",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Traffic routed successfully",
                },
              ],
            },
          ],
        },
      ],
      timestamp: 1703123456789,
      lastSeen: "2023-12-21T10:30:45.123Z",
    },
    {
      nodeID: "cloud-cluster-worker-3",
      nodeName: "cloud-worker-3",
      nodeType: "cloud",
      status: "Ready",
      cpu: {
        total: 16,
        used: 12.8,
        percentage: 80.0,
        details: "cpu 123456 12345 1234567 123456 123456 123456 123456 123456",
      },
      memory: {
        total: "32768MB",
        used: "24576MB",
        free: "8192MB",
        percentage: 75.0,
        details: "Mem: 32768 24576 8192 0 0 0",
      },
      network: {
        eth0: {
          rx_bytes: 3456789012,
          tx_bytes: 2987654321,
          rx_packets: 345678,
          tx_packets: 876543,
        },
        details: "eth0: 3456789012 345678 2987654321 876543 0 0 0 0 0 0",
      },
      storage: {
        total: "500GB",
        used: "350GB",
        free: "150GB",
        percentage: 70.0,
      },
      pods: [
        {
          podID: "ml-training-abc789",
          podName: "ml-training-abc789",
          namespace: "ml",
          status: "Running",
          podIP: "10.244.1.12",
          nodeIP: "192.168.1.102",
          restartCount: 0,
          age: "3d",
          createdAt: "2023-12-18T09:00:00Z",
          resources: {
            requests: {
              cpu: "2000m",
              memory: "4Gi",
            },
            limits: {
              cpu: "4000m",
              memory: "8Gi",
            },
            usage: {
              cpu: "1800m",
              memory: "3.5Gi",
            },
          },
          services: [
            {
              serviceID: "tensorflow-training",
              serviceName: "TensorFlow Training Service",
              serviceType: "Job",
              image: "tensorflow/tensorflow:2.12-gpu",
              ports: [
                {
                  containerPort: 6006,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "MODEL_PATH",
                  value: "/app/models",
                },
                {
                  name: "TRAINING_DATA",
                  value: "/app/data",
                },
              ],
              volumes: [
                {
                  name: "model-storage",
                  mountPath: "/app/models",
                  readOnly: false,
                },
                {
                  name: "training-data",
                  mountPath: "/app/data",
                  readOnly: true,
                },
              ],
              status: "Running",
              startTime: "2023-12-18T09:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "ML training in progress",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Model accuracy: 95.2%",
                },
              ],
            },
          ],
        },
        {
          podID: "data-processing-def012",
          podName: "data-processing-def012",
          namespace: "data",
          status: "Running",
          podIP: "10.244.1.13",
          nodeIP: "192.168.1.102",
          restartCount: 2,
          age: "1d",
          createdAt: "2023-12-20T16:00:00Z",
          resources: {
            requests: {
              cpu: "1000m",
              memory: "2Gi",
            },
            limits: {
              cpu: "2000m",
              memory: "4Gi",
            },
            usage: {
              cpu: "950m",
              memory: "1.8Gi",
            },
          },
          services: [
            {
              serviceID: "spark-processor",
              serviceName: "Apache Spark Processor",
              serviceType: "Deployment",
              image: "apache/spark:3.4",
              ports: [
                {
                  containerPort: 7077,
                  protocol: "TCP",
                },
                {
                  containerPort: 8080,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "SPARK_MASTER",
                  value: "spark://spark-master:7077",
                },
              ],
              volumes: [
                {
                  name: "spark-data",
                  mountPath: "/opt/spark/work",
                  readOnly: false,
                },
              ],
              status: "Running",
              startTime: "2023-12-20T16:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Spark job processing data",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Data transformation completed",
                },
              ],
            },
          ],
        },
      ],
      timestamp: 1703123456789,
      lastSeen: "2023-12-21T10:30:45.123Z",
    },
    {
      nodeID: "edge-cluster-agent-1",
      nodeName: "edge-agent-1",
      nodeType: "edge",
      status: "Ready",
      cpu: {
        total: 2,
        used: 1.2,
        percentage: 60.0,
        details: "cpu 123456 12345 1234567 123456 123456 123456 123456 123456",
      },
      memory: {
        total: "4096MB",
        used: "2048MB",
        free: "2048MB",
        percentage: 50.0,
        details: "Mem: 4096 2048 2048 0 0 0",
      },
      network: {
        eth0: {
          rx_bytes: 987654321,
          tx_bytes: 123456789,
          rx_packets: 654321,
          tx_packets: 123456,
        },
        details: "eth0: 987654321 654321 123456789 123456 0 0 0 0 0 0",
      },
      storage: {
        total: "50GB",
        used: "20GB",
        free: "30GB",
        percentage: 40.0,
      },
      pods: [
        {
          podID: "edge-agent-pqr678",
          podName: "edge-agent-pqr678",
          namespace: "default",
          status: "Running",
          podIP: "10.244.2.5",
          nodeIP: "192.168.2.100",
          restartCount: 0,
          age: "1d",
          createdAt: "2023-12-20T12:00:00Z",
          resources: {
            requests: {
              cpu: "50m",
              memory: "64Mi",
            },
            limits: {
              cpu: "100m",
              memory: "128Mi",
            },
            usage: {
              cpu: "40m",
              memory: "55Mi",
            },
          },
          services: [
            {
              serviceID: "edge-agent-service",
              serviceName: "Edge Agent Service",
              serviceType: "DaemonSet",
              image: "cloud-edge-agent:latest",
              ports: [],
              env: [
                {
                  name: "BACKEND_URL",
                  value: "http://192.168.9.100:3000",
                },
                {
                  name: "NODE_TYPE",
                  value: "edge",
                },
                {
                  name: "HEARTBEAT_INTERVAL",
                  value: "30",
                },
              ],
              volumes: [
                {
                  name: "host-proc",
                  mountPath: "/host/proc",
                  readOnly: true,
                },
                {
                  name: "host-sys",
                  mountPath: "/host/sys",
                  readOnly: true,
                },
              ],
              status: "Running",
              startTime: "2023-12-20T12:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Edge agent heartbeat sent",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Edge resource monitoring active",
                },
              ],
            },
          ],
        },
        {
          podID: "iot-service-stu901",
          podName: "iot-service-stu901",
          namespace: "iot",
          status: "Running",
          podIP: "10.244.2.6",
          nodeIP: "192.168.2.100",
          restartCount: 1,
          age: "2d",
          createdAt: "2023-12-19T15:30:00Z",
          resources: {
            requests: {
              cpu: "150m",
              memory: "256Mi",
            },
            limits: {
              cpu: "300m",
              memory: "512Mi",
            },
            usage: {
              cpu: "120m",
              memory: "200Mi",
            },
          },
          services: [
            {
              serviceID: "iot-data-processor",
              serviceName: "IoT Data Processor Service",
              serviceType: "Deployment",
              image: "python:3.9-slim",
              ports: [
                {
                  containerPort: 8080,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "IOT_TOPIC",
                  value: "sensors/data",
                },
                {
                  name: "PROCESSING_INTERVAL",
                  value: "5",
                },
              ],
              volumes: [
                {
                  name: "iot-data",
                  mountPath: "/app/data",
                  readOnly: false,
                },
              ],
              status: "Running",
              startTime: "2023-12-19T15:30:10Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "IoT data processing active",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Sensor data received and processed",
                },
              ],
            },
          ],
        },
      ],
      timestamp: 1703123456789,
      lastSeen: "2023-12-21T10:30:45.123Z",
    },
    {
      nodeID: "cloud-cluster-worker-4",
      nodeName: "cloud-worker-4",
      nodeType: "cloud",
      status: "Ready",
      cpu: {
        total: 32,
        used: 8.0,
        percentage: 25.0,
        details: "cpu 123456 12345 1234567 123456 123456 123456 123456 123456",
      },
      memory: {
        total: "65536MB",
        used: "16384MB",
        free: "49152MB",
        percentage: 25.0,
        details: "Mem: 65536 16384 49152 0 0 0",
      },
      network: {
        eth0: {
          rx_bytes: 4567890123,
          tx_bytes: 3987654321,
          rx_packets: 456789,
          tx_packets: 987654,
        },
        details: "eth0: 4567890123 456789 3987654321 987654 0 0 0 0 0 0",
      },
      storage: {
        total: "1000GB",
        used: "200GB",
        free: "800GB",
        percentage: 20.0,
      },
      pods: [
        {
          podID: "backup-service-ghi345",
          podName: "backup-service-ghi345",
          namespace: "backup",
          status: "Running",
          podIP: "10.244.1.14",
          nodeIP: "192.168.1.103",
          restartCount: 0,
          age: "5d",
          createdAt: "2023-12-16T08:00:00Z",
          resources: {
            requests: {
              cpu: "500m",
              memory: "1Gi",
            },
            limits: {
              cpu: "1000m",
              memory: "2Gi",
            },
            usage: {
              cpu: "400m",
              memory: "800Mi",
            },
          },
          services: [
            {
              serviceID: "backup-manager",
              serviceName: "Backup Manager Service",
              serviceType: "CronJob",
              image: "backup-manager:latest",
              ports: [
                {
                  containerPort: 8080,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "BACKUP_SCHEDULE",
                  value: "0 2 * * *",
                },
                {
                  name: "RETENTION_DAYS",
                  value: "30",
                },
              ],
              volumes: [
                {
                  name: "backup-storage",
                  mountPath: "/backups",
                  readOnly: false,
                },
              ],
              status: "Running",
              startTime: "2023-12-16T08:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Backup job completed successfully",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Data retention policy applied",
                },
              ],
            },
          ],
        },
        {
          podID: "security-scan-jkl678",
          podName: "security-scan-jkl678",
          namespace: "security",
          status: "Running",
          podIP: "10.244.1.15",
          nodeIP: "192.168.1.103",
          restartCount: 1,
          age: "1d",
          createdAt: "2023-12-20T10:00:00Z",
          resources: {
            requests: {
              cpu: "200m",
              memory: "512Mi",
            },
            limits: {
              cpu: "500m",
              memory: "1Gi",
            },
            usage: {
              cpu: "150m",
              memory: "400Mi",
            },
          },
          services: [
            {
              serviceID: "vulnerability-scanner",
              serviceName: "Vulnerability Scanner Service",
              serviceType: "Deployment",
              image: "trivy:latest",
              ports: [
                {
                  containerPort: 8080,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "SCAN_INTERVAL",
                  value: "24h",
                },
              ],
              volumes: [
                {
                  name: "scan-results",
                  mountPath: "/results",
                  readOnly: false,
                },
              ],
              status: "Running",
              startTime: "2023-12-20T10:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Security scan completed",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "No critical vulnerabilities found",
                },
              ],
            },
          ],
        },
      ],
      timestamp: 1703123456789,
      lastSeen: "2023-12-21T10:30:45.123Z",
    },
    {
      nodeID: "edge-cluster-agent-2",
      nodeName: "edge-agent-2",
      nodeType: "edge",
      status: "Ready",
      cpu: {
        total: 4,
        used: 3.2,
        percentage: 80.0,
        details: "cpu 123456 12345 1234567 123456 123456 123456 123456 123456",
      },
      memory: {
        total: "8192MB",
        used: "6144MB",
        free: "2048MB",
        percentage: 75.0,
        details: "Mem: 8192 6144 2048 0 0 0",
      },
      network: {
        eth0: {
          rx_bytes: 1876543210,
          tx_bytes: 223456789,
          rx_packets: 754321,
          tx_packets: 223456,
        },
        details: "eth0: 1876543210 754321 223456789 223456 0 0 0 0 0 0",
      },
      storage: {
        total: "100GB",
        used: "75GB",
        free: "25GB",
        percentage: 75.0,
      },
      pods: [
        {
          podID: "video-processing-mno234",
          podName: "video-processing-mno234",
          namespace: "media",
          status: "Running",
          podIP: "10.244.2.7",
          nodeIP: "192.168.2.101",
          restartCount: 0,
          age: "2d",
          createdAt: "2023-12-19T13:00:00Z",
          resources: {
            requests: {
              cpu: "500m",
              memory: "1Gi",
            },
            limits: {
              cpu: "1000m",
              memory: "2Gi",
            },
            usage: {
              cpu: "450m",
              memory: "850Mi",
            },
          },
          services: [
            {
              serviceID: "ffmpeg-processor",
              serviceName: "FFmpeg Video Processor",
              serviceType: "Deployment",
              image: "jrottenberg/ffmpeg:latest",
              ports: [
                {
                  containerPort: 8080,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "VIDEO_FORMAT",
                  value: "mp4",
                },
                {
                  name: "QUALITY_PRESET",
                  value: "medium",
                },
              ],
              volumes: [
                {
                  name: "video-input",
                  mountPath: "/input",
                  readOnly: true,
                },
                {
                  name: "video-output",
                  mountPath: "/output",
                  readOnly: false,
                },
              ],
              status: "Running",
              startTime: "2023-12-19T13:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Video processing completed",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Stream quality optimized",
                },
              ],
            },
          ],
        },
        {
          podID: "sensor-aggregator-pqr567",
          podName: "sensor-aggregator-pqr567",
          namespace: "iot",
          status: "Running",
          podIP: "10.244.2.8",
          nodeIP: "192.168.2.101",
          restartCount: 1,
          age: "1d",
          createdAt: "2023-12-20T17:00:00Z",
          resources: {
            requests: {
              cpu: "200m",
              memory: "256Mi",
            },
            limits: {
              cpu: "400m",
              memory: "512Mi",
            },
            usage: {
              cpu: "180m",
              memory: "220Mi",
            },
          },
          services: [
            {
              serviceID: "sensor-collector",
              serviceName: "Sensor Data Collector",
              serviceType: "DaemonSet",
              image: "sensor-collector:latest",
              ports: [
                {
                  containerPort: 9090,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "SENSOR_INTERVAL",
                  value: "5",
                },
                {
                  name: "DATA_TOPIC",
                  value: "sensors/raw",
                },
              ],
              volumes: [
                {
                  name: "sensor-config",
                  mountPath: "/config",
                  readOnly: true,
                },
              ],
              status: "Running",
              startTime: "2023-12-20T17:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Sensor data collected",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Data aggregation completed",
                },
              ],
            },
          ],
        },
      ],
      timestamp: 1703123456789,
      lastSeen: "2023-12-21T10:30:45.123Z",
    },
    {
      nodeID: "edge-cluster-agent-3",
      nodeName: "edge-agent-3",
      nodeType: "edge",
      status: "Ready",
      cpu: {
        total: 2,
        used: 0.8,
        percentage: 40.0,
        details: "cpu 123456 12345 1234567 123456 123456 123456 123456 123456",
      },
      memory: {
        total: "4096MB",
        used: "1024MB",
        free: "3072MB",
        percentage: 25.0,
        details: "Mem: 4096 1024 3072 0 0 0",
      },
      network: {
        eth0: {
          rx_bytes: 2876543210,
          tx_bytes: 323456789,
          rx_packets: 854321,
          tx_packets: 323456,
        },
        details: "eth0: 2876543210 854321 323456789 323456 0 0 0 0 0 0",
      },
      storage: {
        total: "50GB",
        used: "15GB",
        free: "35GB",
        percentage: 30.0,
      },
      pods: [
        {
          podID: "gateway-service-stu890",
          podName: "gateway-service-stu890",
          namespace: "gateway",
          status: "Running",
          podIP: "10.244.2.9",
          nodeIP: "192.168.2.102",
          restartCount: 0,
          age: "3d",
          createdAt: "2023-12-18T12:00:00Z",
          resources: {
            requests: {
              cpu: "100m",
              memory: "128Mi",
            },
            limits: {
              cpu: "200m",
              memory: "256Mi",
            },
            usage: {
              cpu: "80m",
              memory: "100Mi",
            },
          },
          services: [
            {
              serviceID: "api-gateway",
              serviceName: "API Gateway Service",
              serviceType: "Deployment",
              image: "nginx:1.21",
              ports: [
                {
                  containerPort: 80,
                  protocol: "TCP",
                },
                {
                  containerPort: 443,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "GATEWAY_CONFIG",
                  value: "/etc/nginx/gateway.conf",
                },
              ],
              volumes: [
                {
                  name: "gateway-config",
                  mountPath: "/etc/nginx",
                  readOnly: true,
                },
              ],
              status: "Running",
              startTime: "2023-12-18T12:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "API gateway active",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Request routing successful",
                },
              ],
            },
          ],
        },
        {
          podID: "monitoring-agent-vwx123",
          podName: "monitoring-agent-vwx123",
          namespace: "monitoring",
          status: "Running",
          podIP: "10.244.2.10",
          nodeIP: "192.168.2.102",
          restartCount: 0,
          age: "1d",
          createdAt: "2023-12-20T09:00:00Z",
          resources: {
            requests: {
              cpu: "50m",
              memory: "64Mi",
            },
            limits: {
              cpu: "100m",
              memory: "128Mi",
            },
            usage: {
              cpu: "40m",
              memory: "55Mi",
            },
          },
          services: [
            {
              serviceID: "node-exporter",
              serviceName: "Node Exporter Service",
              serviceType: "DaemonSet",
              image: "prom/node-exporter:v1.5.0",
              ports: [
                {
                  containerPort: 9100,
                  protocol: "TCP",
                },
              ],
              env: [
                {
                  name: "COLLECTORS_ENABLED",
                  value: "cpu,memory,disk,network",
                },
              ],
              volumes: [
                {
                  name: "host-proc",
                  mountPath: "/host/proc",
                  readOnly: true,
                },
                {
                  name: "host-sys",
                  mountPath: "/host/sys",
                  readOnly: true,
                },
              ],
              status: "Running",
              startTime: "2023-12-20T09:00:05Z",
              logs: [
                {
                  timestamp: "2023-12-21T10:30:45Z",
                  level: "INFO",
                  message: "Metrics collection active",
                },
                {
                  timestamp: "2023-12-21T10:30:15Z",
                  level: "INFO",
                  message: "Node metrics exported",
                },
              ],
            },
          ],
        },
      ],
      timestamp: 1703123456789,
      lastSeen: "2023-12-21T10:30:45.123Z",
    },
  ],
  summary: {
    totalNodes: 7,
    totalPods: 15,
    totalServices: 15,
    cloudNodes: 4,
    edgeNodes: 3,
    runningPods: 15,
    failedPods: 0,
    pendingPods: 0,
    totalCPU: 70,
    totalMemory: "128GB",
    usedCPU: 32.8,
    usedMemory: "64GB",
  },
  metadata: {
    generatedAt: "2023-12-21T10:30:45.123Z",
    version: "1.0.0",
    description:
      "Mock data for Cloud-Edge Platform with detailed node, pod and service information",
  },
};
