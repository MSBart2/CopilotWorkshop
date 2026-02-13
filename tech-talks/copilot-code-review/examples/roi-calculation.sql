-- Query to calculate Copilot Code Review ROI metrics
-- Assumes PR data is synced to analytics database

WITH baseline_metrics AS (
  -- Period before Copilot Code Review (e.g., 90 days before implementation)
  SELECT 
    COUNT(*) as total_prs,
    AVG(TIMESTAMPDIFF(HOUR, created_at, merged_at)) as avg_pr_duration_hours,
    AVG(commits_count) as avg_commits_per_pr,
    AVG(review_comments_count) as avg_review_comments,
    SUM(CASE WHEN reverted THEN 1 ELSE 0 END) / COUNT(*) as revert_rate
  FROM pull_requests
  WHERE created_at BETWEEN DATE_SUB(NOW(), INTERVAL 180 DAY) 
                       AND DATE_SUB(NOW(), INTERVAL 90 DAY)
    AND status = 'merged'
),

copilot_metrics AS (
  -- Period after Copilot Code Review implementation
  SELECT 
    COUNT(*) as total_prs,
    AVG(TIMESTAMPDIFF(HOUR, created_at, merged_at)) as avg_pr_duration_hours,
    AVG(commits_count) as avg_commits_per_pr,
    AVG(review_comments_count) as avg_review_comments,
    SUM(CASE WHEN reverted THEN 1 ELSE 0 END) / COUNT(*) as revert_rate,
    AVG(copilot_findings_total) as avg_copilot_findings,
    AVG(copilot_findings_critical) as avg_critical_findings
  FROM pull_requests
  WHERE created_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)
    AND status = 'merged'
),

cost_analysis AS (
  SELECT 
    -- Average developer hourly cost (adjust for your org)
    150 as developer_hourly_rate,
    
    -- Copilot Enterprise cost per seat per month
    39 as copilot_monthly_cost,
    
    -- Number of active developers
    (SELECT COUNT(DISTINCT author) FROM pull_requests 
     WHERE created_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)) as active_developers
)

SELECT 
  -- Time Savings
  b.avg_pr_duration_hours - c.avg_pr_duration_hours as hours_saved_per_pr,
  (b.avg_pr_duration_hours - c.avg_pr_duration_hours) * c.total_prs as total_hours_saved,
  
  -- Quality Improvements
  (b.revert_rate - c.revert_rate) * 100 as revert_rate_improvement_pct,
  b.avg_commits_per_pr - c.avg_commits_per_pr as commits_reduced_per_pr,
  
  -- ROI Calculation
  ((b.avg_pr_duration_hours - c.avg_pr_duration_hours) * c.total_prs * ca.developer_hourly_rate) 
    as labor_cost_savings,
  (ca.copilot_monthly_cost * ca.active_developers * 3) as copilot_cost_3_months,
  
  ((b.avg_pr_duration_hours - c.avg_pr_duration_hours) * c.total_prs * ca.developer_hourly_rate) 
    / (ca.copilot_monthly_cost * ca.active_developers * 3) as roi_ratio,
  
  -- Engagement Metrics
  c.avg_copilot_findings as avg_findings_per_pr,
  c.avg_critical_findings as avg_critical_per_pr,
  
  -- Recommendations
  CASE 
    WHEN ((b.avg_pr_duration_hours - c.avg_pr_duration_hours) * c.total_prs * ca.developer_hourly_rate) 
         / (ca.copilot_monthly_cost * ca.active_developers * 3) > 3 
    THEN 'Strong ROI - Expand usage'
    WHEN ((b.avg_pr_duration_hours - c.avg_pr_duration_hours) * c.total_prs * ca.developer_hourly_rate) 
         / (ca.copilot_monthly_cost * ca.active_developers * 3) > 1 
    THEN 'Positive ROI - Continue monitoring'
    ELSE 'Review configuration and adoption'
  END as recommendation

FROM baseline_metrics b, copilot_metrics c, cost_analysis ca;
