"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[636],{46469:(e,a,_)=>{_.r(a),_.d(a,{getPlanFeatures:()=>i,getTemplateMessages:()=>l,getUsageForOperation:()=>s,useGetOperationUsage:()=>u,useGetPlanFeatures:()=>p,useGetTemplateMessages:()=>c});var t=_(98079),n=_(84492);const r=["ai_generated_test_suites","ai_generated_tests","ai_generated_fql","api_repo_integration_staticip_enabled","public_link_governance_enabled","viewer_roles_enabled","true_up_allowed","custom_domain_enabled","user_groups_enabled","community_manager_role_allowed","sso_enabled","scim_enabled","iam_data_governance_allowed","apisec_custom_tokens_enabled","secret_scanner_dashboard_enabled","secret_scanner_workspace_visibility","pr_settings_access_allowed","monitor_resolution_enabled","monitor_region_selection_enabled","monitor_default_frequency","monitor_premium_cluster_enabled","scheduled_run_default_frequency","scheduled_run_resolution_enabled","can_opt_for_limited_duration_trial","onboarding_show_free_tier_migration_alert","show_true_up_billing_opt_in_banner","onboarding_show_upgrade_to_paid_alert","reporting_enabled","looker_reporting_enabled","super_admin_role_allowed","api_governance_feature_set_enabled","api_security_feature_set_enabled","api_governance_owasp_library_enabled","api_governance_security_overview_enabled","network_manager_role_enabled","is_paid_plan_growth","is_enterprise_plan_growth","private_team_workspaces_enabled","partner_workspace_enabled","isolated_partner_lead_role_management","partner_anonymization_enabled","enterprise_app_download_allowed","public_workspace_creation_enabled","publish_documentation_governance_enabled","limit_publish_documentation","audit_logs_enabled","audit_logs_retention_period","private_network_enabled","growth_experimentation_enabled","collection_run_usage_limit","guest_viewer_enabled","flows_enabled","flow_editor_role_allowed","enable_publish_customisations","documentation_editor_without_action_buttons","api_authentication_enabled","api_authentication_multiple_config_support","auto_upgrade_flow_editor","auto_approve_invite_suggestions_enabled","workspace_templates_enabled","templates_on_create_workspace_enabled","personal_workspaces_access_to_team_allowed","performance_run_usage_limit","api_key_governance_enabled","universal_tagging_enabled","search_api_definition","private_network_folder_nested_limit","restrict_team_workspace_creation","team_settings_workspace_management_allowed","api_builder_enabled","rewards_enabled"],o="billing-service",i=({signal:e,userId:a})=>({queryKey:[o,a],queryFn:()=>(async({signal:e,userId:a})=>await t.postmanGateway.post({url:`${n.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/features/list?entityType=user&entityValue=${a}`,service:"features",data:{body:{features:r}},signal:e}))({signal:e,userId:a}),retry:!1,retryOnMount:!1,enabled:!!a,useErrorBoundary:!1}),s=({signal:e,operation:a})=>({queryKey:[o,a],queryFn:()=>(async({signal:e,operation:a})=>await t.postmanGateway.get({url:`${n.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/usage/operations/${a}`,service:"usage",signal:e}))({signal:e,operation:a}),retry:!1,retryOnMount:!1,enabled:!!a,useErrorBoundary:!1}),l=({signal:e,templatePath:a})=>({queryKey:[o,a],queryFn:()=>(async({signal:e,templatePath:a})=>await t.postmanGateway.get({url:`${n.Z.RUNTIME_ASSET_URL}${a}`,credentials:"omit",signal:e}))({signal:e,templatePath:a}),retry:!1,retryOnMount:!1,enabled:!!a,useErrorBoundary:!1});var d=_(44958);const u=e=>(0,d.useDataFetch)(s({operation:e})),p=e=>(0,d.useDataFetch)(i({userId:e})),c=e=>(0,d.useDataFetch)(l({templatePath:e}))}}]);
//# sourceMappingURL=636.e2c3174dd2c8ca02.js.map