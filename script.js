// Cybersecurity Dashboard - Real-time Simulation

document.addEventListener('DOMContentLoaded', () => {
  // Stats
  const threatsDetected = document.getElementById('threatsDetected');
  const threatsBlocked = document.getElementById('threatsBlocked');
  const activeIncidents = document.getElementById('activeIncidents');
  const systemsMonitored = document.getElementById('systemsMonitored');
  const threatLevel = document.getElementById('threatLevel');
  const threatLevelBar = document.getElementById('threatLevelBar');
  const threatFeed = document.getElementById('threatFeed');
  const alertsTable = document.getElementById('alertsTable');

  // Simulated data
  let stats = {
    threatsDetected: 1243,
    threatsBlocked: 1201,
    activeIncidents: 3,
    systemsMonitored: 42
  };

  let threatLevels = [
    { level: 'Low', color: 'text-green-400', bar: 'bg-green-400', width: '30%' },
    { level: 'Elevated', color: 'text-yellow-400', bar: 'bg-yellow-400', width: '60%' },
    { level: 'Critical', color: 'text-red-400', bar: 'bg-red-400', width: '90%' }
  ];

  let currentThreatLevel = 1; // Start at 'Elevated'

  const threatTypes = [
    { icon: 'fa-bug', color: 'text-red-400', label: 'Malware' },
    { icon: 'fa-user-secret', color: 'text-yellow-400', label: 'Intrusion' },
    { icon: 'fa-shield-virus', color: 'text-green-400', label: 'Phishing' },
    { icon: 'fa-network-wired', color: 'text-blue-400', label: 'DDoS'