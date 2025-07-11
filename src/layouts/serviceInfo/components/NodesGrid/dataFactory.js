export const toNodeView = (node) => ({
  id: node.nodeID,
  name: node.nodeName,
  role: node.nodeType, // cloud / edge
  cpuPct: node.cpu.percentage,
  memPct: node.memory.percentage,
  services: node.pods.flatMap((p) =>
    p.services.map((s) => ({
      pod: p.podName,
      serviceId: s.serviceID,
      name: s.serviceName,
      type: s.serviceType,
      image: s.image,
      status: s.status,
      cpu: p.resources.usage.cpu,
      mem: p.resources.usage.memory,
    }))
  ),
});
