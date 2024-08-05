export interface paths {
    "/context": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contexts
         * @description List all contexts for an owner.
         */
        get: operations["listContexts"];
        put?: never;
        /**
         * Create a new context
         * @description Creates a new context.
         */
        post: operations["createContext"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/context/{context-id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a context
         * @description Returns basic information about a context.
         */
        get: operations["getContext"];
        put?: never;
        post?: never;
        /** Delete a context */
        delete: operations["deleteContext"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/context/{context-id}/environment-variable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List environment variables
         * @description List information about environment variables in a context, not including their values.
         */
        get: operations["listEnvironmentVariablesFromContext"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/context/{context-id}/environment-variable/{env-var-name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Add or update an environment variable
         * @description Create or update an environment variable within a context. Returns information about the environment variable, not including its value.
         */
        put: operations["addEnvironmentVariableToContext"];
        post?: never;
        /**
         * Remove an environment variable
         * @description Delete an environment variable from a context.
         */
        delete: operations["deleteEnvironmentVariableFromContext"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/pages/{project-slug}/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get summary metrics and trends for a project across it's workflows and branches
         * @description Get summary metrics and trends for a project at workflow and branch level.
         *                  Workflow runs going back at most 90 days are included in the aggregation window.
         *                  Trends are only supported upto last 30 days.
         *                  Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.
         */
        get: operations["getProjectWorkflowsPageData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/time-series/{project-slug}/workflows/{workflow-name}/jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Job timeseries data
         * @description Get timeseries data for all jobs within a workflow. Hourly granularity data is only retained for 48 hours while daily granularity data is retained for 90 days.
         */
        get: operations["getJobTimeseries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/{org-slug}/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get summary metrics with trends for the entire org, and for each project.
         * @description Gets aggregated summary metrics with trends for the entire org.
         *                   Also gets aggregated metrics and trends for each project belonging to the org.
         */
        get: operations["getOrgSummaryData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/{project-slug}/branches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all branches for a project
         * @description Get a list of all branches for a specified project. The list will only contain branches currently available within Insights. The maximum number of branches returned by this endpoint is 5,000.
         */
        get: operations["getAllInsightsBranches"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/{project-slug}/flaky-tests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get flaky tests for a project
         * @description Get a list of flaky tests for a given project. Flaky tests are branch agnostic.
         *                  A flaky test is a test that passed and failed in the same commit.
         */
        get: operations["getFlakyTests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/{project-slug}/workflows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get summary metrics for a project's workflows
         * @description Get summary metrics for a project's workflows.  Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours.  Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.
         */
        get: operations["getProjectWorkflowMetrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/{project-slug}/workflows/{workflow-name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get recent runs of a workflow
         * @description Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.
         */
        get: operations["getProjectWorkflowRuns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/{project-slug}/workflows/{workflow-name}/jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get summary metrics for a project workflow's jobs.
         * @description Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.
         */
        get: operations["getProjectWorkflowJobMetrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/{project-slug}/workflows/{workflow-name}/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get metrics and trends for workflows
         * @description Get the metrics and trends for a particular workflow on a single branch or all branches
         */
        get: operations["getWorkflowSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/insights/{project-slug}/workflows/{workflow-name}/test-metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get test metrics for a project's workflows
         * @description Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.
         */
        get: operations["getProjectWorkflowTestMetrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * User Information
         * @description Provides information about the user that is currently signed in.
         */
        get: operations["getCurrentUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/collaborations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Collaborations
         * @description Provides the set of organizations of which a user is a member or a collaborator.
         *
         *     The set of organizations that a user can collaborate on is composed of:
         *
         *     * Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub)
         *     * The parent organization of repository that the user can collaborate on, but is not necessarily a member of
         *     * The organization of the current user's account
         */
        get: operations["getCollaborations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pipeline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a list of pipelines
         * @description Returns all pipelines for the most recently built projects (max 250) you follow in an organization.
         */
        get: operations["listPipelines"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pipeline/continue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Continue a pipeline
         * @description Continue a pipeline from the setup phase. For information on using pipeline parameters with dynamic configuration, see the [Pipeline values and parameters](https://circleci.com/docs/pipeline-variables/#pipeline-parameters-and-dynamic-configuration) docs.
         */
        post: operations["continuePipeline"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pipeline/{pipeline-id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a pipeline by ID
         * @description Returns a pipeline by the pipeline ID.
         */
        get: operations["getPipelineById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pipeline/{pipeline-id}/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a pipeline's configuration
         * @description Returns a pipeline's configuration by ID.
         */
        get: operations["getPipelineConfigById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pipeline/{pipeline-id}/workflow": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a pipeline's workflows
         * @description Returns a paginated list of workflows by pipeline ID.
         */
        get: operations["listWorkflowsByPipelineId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a project
         * @description Retrieves a project by project slug.
         */
        get: operations["getProjectBySlug"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/checkout-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all checkout keys
         * @description Returns a sequence of checkout keys for `:project`.
         */
        get: operations["listCheckoutKeys"];
        put?: never;
        /**
         * Create a new checkout key
         * @description Not available to projects that use GitLab or GitHub App. Creates a new checkout key. This API request is only usable with a user API token.
         *                                Please ensure that you have authorized your account with GitHub before creating user keys.
         *                                This is necessary to give CircleCI the permission to create a user key associated with
         *                                your GitHub user account. You can find this page by visiting Project Settings > Checkout SSH Keys
         */
        post: operations["createCheckoutKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/checkout-key/{fingerprint}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a checkout key
         * @description Returns an individual checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.
         */
        get: operations["getCheckoutKey"];
        put?: never;
        post?: never;
        /**
         * Delete a checkout key
         * @description Deletes the checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.
         */
        delete: operations["deleteCheckoutKey"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/envvar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all environment variables
         * @description Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.
         */
        get: operations["listEnvVars"];
        put?: never;
        /**
         * Create an environment variable
         * @description Creates a new environment variable.
         */
        post: operations["createEnvVar"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/envvar/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a masked environment variable
         * @description Returns the masked value of environment variable :name.
         */
        get: operations["getEnvVar"];
        put?: never;
        post?: never;
        /**
         * Delete an environment variable
         * @description Deletes the environment variable named :name.
         */
        delete: operations["deleteEnvVar"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/job/{job-number}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get job details
         * @description Returns job details.
         */
        get: operations["getJobDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/job/{job-number}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel job
         * @description Cancel job with a given job number.
         */
        post: operations["cancelJob"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/pipeline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all pipelines
         * @description Returns all pipelines for this project.
         */
        get: operations["listPipelinesForProject"];
        put?: never;
        /**
         * Trigger a new pipeline
         * @description Not yet available to projects that use GitLab or GitHub App. Triggers a new pipeline on the project.
         */
        post: operations["triggerPipeline"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/pipeline/mine": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get your pipelines
         * @description Returns a sequence of all pipelines for this project triggered by the user.
         */
        get: operations["listMyPipelines"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/pipeline/{pipeline-number}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a pipeline by pipeline number
         * @description Returns a pipeline by the pipeline number.
         */
        get: operations["getPipelineByNumber"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all schedules
         * @description Returns all schedules for this project.
         */
        get: operations["listSchedulesForProject"];
        put?: never;
        /**
         * Create a schedule
         * @description Not yet available to projects that use GitLab or GitHub App. Creates a schedule and returns the created schedule.
         */
        post: operations["createSchedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/{job-number}/artifacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a job's artifacts
         * @description Returns a job's artifacts.
         */
        get: operations["getJobArtifacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{project-slug}/{job-number}/tests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get test metadata
         * @description Get test metadata for a build. In the rare case where there is more than 250MB of test data on the job, no results will be returned.
         */
        get: operations["getTests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/schedule/{schedule-id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a schedule
         * @description Get a schedule by id.
         */
        get: operations["getScheduleById"];
        put?: never;
        post?: never;
        /**
         * Delete a schedule
         * @description Not yet available to projects that use GitLab or GitHub App. Deletes the schedule by id.
         */
        delete: operations["deleteScheduleById"];
        options?: never;
        head?: never;
        /**
         * Update a schedule
         * @description Not yet available to projects that use GitLab or GitHub App. Updates a schedule and returns the updated schedule.
         */
        patch: operations["updateSchedule"];
        trace?: never;
    };
    "/user/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * User Information
         * @description Provides information about the user with the given ID.
         */
        get: operations["getUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhook": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webhooks
         * @description Get a list of outbound webhooks that match the given scope-type and scope-id
         */
        get: operations["getWebhooks"];
        put?: never;
        /**
         * Create an outbound webhook
         * @description Creates an outbound webhook.
         */
        post: operations["createWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhook/{webhook-id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a webhook
         * @description Get an outbound webhook by id.
         */
        get: operations["getWebhookById"];
        /**
         * Update an outbound webhook
         * @description Updates an outbound webhook.
         */
        put: operations["updateWebhook"];
        post?: never;
        /**
         * Delete an outbound webhook
         * @description Deletes an outbound webhook
         */
        delete: operations["deleteWebhook"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a workflow
         * @description Returns summary fields of a workflow by ID.
         */
        get: operations["getWorkflowById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow/{id}/approve/{approval_request_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve a job
         * @description Approves a pending approval job in a workflow.
         */
        post: operations["approvePendingApprovalJobById"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow/{id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel a workflow
         * @description Cancels a running workflow.
         */
        post: operations["cancelWorkflow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow/{id}/job": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a workflow's jobs
         * @description Returns a sequence of jobs for a workflow.
         */
        get: operations["listWorkflowJobs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow/{id}/rerun": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Rerun a workflow
         * @description Reruns a workflow.
         */
        post: operations["rerunWorkflow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/org/{orgID}/oidc-custom-claims": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get org-level claims
         * @description Fetches org-level custom claims of OIDC identity tokens
         */
        get: operations["GetOrgClaims"];
        put?: never;
        post?: never;
        /**
         * Delete org-level claims
         * @description Deletes org-level custom claims of OIDC identity tokens
         */
        delete: operations["DeleteOrgClaims"];
        options?: never;
        head?: never;
        /**
         * Patch org-level claims
         * @description Creates/Updates org-level custom claims of OIDC identity tokens
         */
        patch: operations["PatchOrgClaims"];
        trace?: never;
    };
    "/org/{orgID}/project/{projectID}/oidc-custom-claims": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get project-level claims
         * @description Fetches project-level custom claims of OIDC identity tokens
         */
        get: operations["GetProjectClaims"];
        put?: never;
        post?: never;
        /**
         * Delete project-level claims
         * @description Deletes project-level custom claims of OIDC identity tokens
         */
        delete: operations["DeleteProjectClaims"];
        options?: never;
        head?: never;
        /**
         * Patch project-level claims
         * @description Creates/Updates project-level custom claims of OIDC identity tokens
         */
        patch: operations["PatchProjectClaims"];
        trace?: never;
    };
    "/owner/{ownerID}/context/{context}/decision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves the owner's decision audit logs.
         * @description This endpoint will return a list of decision audit logs that were made using this owner's policies.
         */
        get: operations["GetDecisionLogs"];
        put?: never;
        /**
         * Makes a decision
         * @description This endpoint will evaluate input data (config+metadata) against owner's stored policies and return a decision.
         */
        post: operations["MakeDecision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/owner/{ownerID}/context/{context}/decision/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the decision settings
         * @description This endpoint retrieves the current decision settings (eg enable/disable policy evaluation)
         */
        get: operations["GetDecisionSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Set the decision settings
         * @description This endpoint allows modifying decision settings (eg enable/disable policy evaluation)
         */
        patch: operations["SetDecisionSettings"];
        trace?: never;
    };
    "/owner/{ownerID}/context/{context}/decision/{decisionID}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves the owner's decision audit log by given decisionID
         * @description This endpoint will retrieve a decision for a given decision log ID
         */
        get: operations["GetDecisionLog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/owner/{ownerID}/context/{context}/decision/{decisionID}/policy-bundle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves Policy Bundle for a given decision log ID
         * @description This endpoint will retrieve a policy bundle for a given decision log ID
         */
        get: operations["GetDecisionLogPolicyBundle"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/owner/{ownerID}/context/{context}/policy-bundle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves Policy Bundle
         * @description This endpoint will retrieve a policy bundle
         */
        get: operations["GetPolicyBundle"];
        put?: never;
        /**
         * Creates policy bundle for the context
         * @description This endpoint replaces the current policy bundle with the provided policy bundle
         */
        post: operations["CreatePolicyBundle"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/owner/{ownerID}/context/{context}/policy-bundle/{policyName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
                /** @description the policy name set by the rego policy_name rule */
                policyName: string;
            };
            cookie?: never;
        };
        /**
         * Retrieves a policy document
         * @description This endpoint will retrieve a policy document.
         */
        get: operations["GetPolicyDocument"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/context/{context_id}/restrictions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of a context.
                 * @example be8bb2e3-c3d6-4098-89f4-572ff976ba9a
                 */
                context_id: components["parameters"]["context_id"];
            };
            cookie?: never;
        };
        /**
         * 🧪 Get context restrictions
         * @description [__EXPERIMENTAL__] Gets a list of project restrictions associated with a context.
         */
        get: operations["getContextRestrictions"];
        put?: never;
        /**
         * 🧪 Create context restriction
         * @description [__EXPERIMENTAL__] Creates project restriction on a context.
         */
        post: operations["createContextRestriction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/context/{context_id}/restrictions/{restriction_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of a context.
                 * @example be8bb2e3-c3d6-4098-89f4-572ff976ba9a
                 */
                context_id: components["parameters"]["context_id"];
                /**
                 * @description An opaque identifier of a context restriction.
                 * @example 1c23d2cb-07b1-4a28-8af3-e369732050ed
                 */
                restriction_id: components["parameters"]["restriction_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * 🧪 Delete context restriction
         * @description [__EXPERIMENTAL__] Deletes a project restriction on a context.
         */
        delete: operations["deleteContextRestriction"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{provider}/{organization}/{project}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.
                 * @example gh
                 */
                provider: components["parameters"]["provider"];
                /**
                 * @description The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).
                 * @example CircleCI-Public
                 */
                organization: components["parameters"]["organization"];
                /**
                 * @description The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).
                 * @example api-preview-docs
                 */
                project: components["parameters"]["project"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 🧪 Create a project
         * @description [__EXPERIMENTAL__]  Creates a new CircleCI project, and returns a list of the default advanced settings. Can only be called on a repo with a main branch and an existing config.yml file. Not yet available to projects that use GitLab or GitHub App.
         */
        post: operations["createProject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/project/{provider}/{organization}/{project}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.
                 * @example gh
                 */
                provider: components["parameters"]["provider"];
                /**
                 * @description The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).
                 * @example CircleCI-Public
                 */
                organization: components["parameters"]["organization"];
                /**
                 * @description The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).
                 * @example api-preview-docs
                 */
                project: components["parameters"]["project"];
            };
            cookie?: never;
        };
        /**
         * 🧪 Get project settings
         * @description [__EXPERIMENTAL__] Returns a list of the advanced settings for a CircleCI project, whether enabled (true) or not (false).
         */
        get: operations["getProjectSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * 🧪 Update project settings
         * @description [__EXPERIMENTAL__] Updates one or more of the advanced settings for a CircleCI project.
         */
        patch: operations["patchProjectSettings"];
        trace?: never;
    };
    "/organizations/{org_id}/usage_export_job": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of an organization.
                 * @example b9291e0d-a11e-41fb-8517-c545388b5953
                 */
                org_id: components["parameters"]["org_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a usage export
         * @description Submits a request to create a usage export for an organization.
         */
        post: operations["createUsageExport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/{org_id}/usage_export_job/{usage_export_job_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of an organization.
                 * @example b9291e0d-a11e-41fb-8517-c545388b5953
                 */
                org_id: components["parameters"]["org_id"];
                /**
                 * @description An opaque identifier of a usage export job.
                 * @example e8235eed-f121-4ae3-9c72-2719d6572818
                 */
                usage_export_job_id: components["parameters"]["usage_export_job_id"];
            };
            cookie?: never;
        };
        /**
         * Get a usage export
         * @description Gets a usage export for an organization.
         */
        get: operations["getUsageExport"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ClaimResponse: {
            audience?: string[];
            /** Format: date-time */
            audience_updated_at?: string;
            /** Format: uuid */
            org_id: string;
            /** Format: uuid */
            project_id?: string;
            ttl?: components["schemas"]["JSONDuration"];
            /** Format: date-time */
            ttl_updated_at?: string;
        };
        JSONDuration: string;
        PatchClaimsRequest: {
            audience?: string[];
            ttl?: components["schemas"]["JSONDuration"];
        };
        BundleDiff: {
            created?: string[];
            deleted?: string[];
            modified?: string[];
        };
        BundlePayload: {
            policies?: {
                [key: string]: string;
            };
        };
        Decision: {
            enabled_rules?: string[];
            hard_failures?: components["schemas"]["Violation"][];
            reason?: string;
            soft_failures?: components["schemas"]["Violation"][];
            status: string;
        };
        DecisionLog: {
            /** Format: date-time */
            created_at?: string;
            decision?: components["schemas"]["Decision"];
            /** Format: uuid */
            id?: string;
            metadata?: {
                build_number?: number;
                /** Format: uuid */
                project_id?: string;
                ssh_rerun?: boolean;
                vcs?: {
                    branch?: string;
                    origin_repository_url?: string;
                    release_tag?: string;
                    target_repository_url?: string;
                };
            };
            /**
             * @description policy-name-to-hash-map
             * @example {
             *       "policy_name1": "1f40fc92da241694750979ee6cf582f2d5d7d28e18335de05abc54d0560e0f5302860c652bf08d560252aa5e74210546f369fbbbce8c12cfc7957b2652fe9a75",
             *       "policy_name2": "5267768822ee624d48fce15ec5ca79cbd602cb7f4c2157a516556991f22ef8c7b5ef7b18d1ff41c59370efb0858651d44a936c11b7b144c48fe04df3c6a3e8da"
             *     }
             */
            policies?: {
                [key: string]: string;
            };
            time_taken_ms?: number;
        };
        DecisionSettings: {
            enabled?: boolean;
        };
        Policy: {
            content?: string;
            /** Format: date-time */
            created_at?: string;
            created_by?: string;
            name?: string;
        };
        PolicyBundle: {
            [key: string]: unknown;
        };
        Violation: {
            reason: string;
            rule: string;
        };
        context_project_restrictions_list: {
            items?: {
                /**
                 * Format: uuid
                 * @description UUID of the context
                 */
                context_id?: string;
                /**
                 * Format: uuid
                 * @description UUID of the restriction
                 */
                id?: string;
                /**
                 * Format: uuid
                 * @deprecated
                 * @description Deprecated - For "project" restrictions read the project ID from
                 *     "restriction_value" instead.
                 *
                 *     UUID of the project used in a project restriction.
                 *
                 */
                project_id?: string;
                /** @description Contains a human-readable reference for the restriction. For
                 *     "project" restrictions this is the name of the project.
                 *
                 *     May be null.
                 *      */
                name?: string;
                /**
                 * @description Type of the restriction
                 * @enum {string}
                 */
                restriction_type?: "project" | "expression";
                /** @description Value used to evaluate the restriction */
                restriction_value?: string;
            }[];
            /** @description Token that can be used to retrieve next page of results */
            next_page_token?: string | null;
        };
        project_settings: {
            advanced?: {
                /** @description Except for the default branch, cancel running pipelines on a branch when a new pipeline starts on that branch. */
                autocancel_builds?: boolean;
                /** @description Run builds for pull requests from forks. */
                build_fork_prs?: boolean;
                /** @description Once enabled, we will only build branches that have associated pull requests open. */
                build_prs_only?: boolean;
                /** @description When set to true, job re-runs with SSH debugging access will be disabled for the project. */
                disable_ssh?: boolean;
                /** @description Run builds for forked pull requests with this project's configuration, environment variables, and secrets. */
                forks_receive_secret_env_vars?: boolean;
                /** @description Free and Open Source. Enabling this grants additional credits, and lets others see your builds, both through the web UI and the API. */
                oss?: boolean;
                /** @description Report the status of every pushed commit to GitHub's status API. Updates reported per job. */
                set_github_status?: boolean;
                /** @description Enabling allows you to conditionally trigger configurations outside of the primary `.circleci` parent directory. */
                setup_workflows?: boolean;
                /** @description Whether updating these settings requires a user to be an organization administrator. When disabled, updating settings can be done by any member. */
                write_settings_requires_admin?: boolean;
                /** @description This field is used in conjunction with the `build_prs_only`, it allows you to specify a list of branches that will always triger a build. The value passed will overwrite the existing value. */
                pr_only_branch_overrides?: string[];
            };
        };
        restriction_created: {
            /**
             * Format: uuid
             * @description UUID of the project restriction
             */
            id?: string;
            /**
             * Format: uuid
             * @description Deprecated - For "project" restrictions read the project ID from
             *     "restriction_value" instead.
             *
             *     UUID of the project used in a project restriction.
             *
             */
            project_id?: string;
            /** @description Contains a human-readable reference for the restriction. For
             *     "project" restrictions this is the name of the project.
             *
             *     May be null.
             *      */
            name?: string;
            /**
             * @description Type of the restriction
             * @enum {string}
             */
            restriction_type?: "project" | "expression";
            /** @description Value used to evaluate the restriction */
            restriction_value?: string;
        };
        restriction_deleted: {
            /** @description Response message */
            message?: string;
        };
        usage_export_job: {
            /** Format: uuid */
            usage_export_job_id: string;
            /** @enum {string} */
            state: "created" | "processing" | "failed" | "completed";
            /** Format: date-time */
            start: string;
            /** Format: date-time */
            end: string;
            /** @description A list of pre signed urls that the client can use to download the results of a Usage Export. */
            download_urls: string[];
        };
        get_usage_export_job_status: {
            /** Format: uuid */
            usage_export_job_id: string;
            /** @enum {string} */
            state: "created" | "processing" | "failed" | "completed";
            /** @description A list of pre signed urls that the client can use to download the results of a Usage Export. */
            download_urls: string[];
            error_reason?: string;
        };
    };
    responses: {
        /** @description The request is malformed (e.g, a given path parameter is invalid)
         *      */
        BadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @example OwnerID: must be a valid UUID. */
                    error: string;
                };
            };
        };
        /** @description The user is forbidden from making this request
         *      */
        Forbidden: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @example Forbidden */
                    error: string;
                };
            };
        };
        /** @description Something unexpected happened on the server. */
        InternalServerError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @example internal server error */
                    error: string;
                };
            };
        };
        /** @description The request is unauthenticated
         *      */
        Unauthenticated: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @example unauthenticated */
                    error: string;
                };
            };
        };
        /** @description The request is unauthorized
         *      */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @example Unauthorized */
                    error: string;
                };
            };
        };
        /** @description Something unexpected happened on the server. */
        UnexpectedServerError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @example unexpected server error */
                    error: string;
                };
            };
        };
        /** @description Context ID provided is invalid. */
        "400_invalid_context_id": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default context_id is invalid. */
                    message: string;
                };
            };
        };
        /** @description Credentials provided are invalid. */
        "401_invalid_token": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    message?: string;
                };
            };
        };
        /** @description Entity not found. */
        "404_entity_not_found": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    message?: string;
                };
            };
        };
        /** @description API rate limits exceeded. */
        "429_rate_limit_exceeded": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default Rate limit exceeded. */
                    message: string;
                };
            };
        };
        /** @description Internal server error. */
        "500_internal_server_error": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default Internal server error. */
                    message: string;
                };
            };
        };
        /** @description Context restriction ID provided is invalid. */
        "400_invalid_restriction_id": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default restriction_id is invalid. */
                    message: string;
                };
            };
        };
        /** @description Unexpected request body provided. */
        "400_unexpected_request_body": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default Unexpected request body provided. */
                    message: string;
                };
            };
        };
        /** @description None or insufficient credentials provided. */
        "403_permission_denied": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default Permission denied. */
                    message: string;
                };
            };
        };
        /** @description Create projects using the API is currently supported for classic Github OAuth and Bitbucket projects only. */
        "405_cannot_create_standalone_project": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default Create projects using the API is currently supported for classic Github OAuth and Bitbucket projects only. */
                    message: string;
                };
            };
        };
        /** @description Insufficient credentials for a private project, OR the organization, project, or repository does not exist. */
        "404_project_not_found": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default Project not found. */
                    message: string;
                };
            };
        };
        /** @description A conflict has occurred while attempting to create the resource.
         *      */
        "409_group_conflict": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    message?: string;
                };
            };
        };
        /** @description Orb ID provided is invalid. */
        "400_invalid_orb_id": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @default orb_id is invalid. */
                    message: string;
                };
            };
        };
    };
    parameters: {
        /** @description comma separated list of claims to delete. Valid values are "audience" and "ttl". */
        Claims: string;
        OrgID: string;
        ProjectID: string;
        Context: string;
        DecisionID: string;
        OwnerID: string;
        /**
         * @description An opaque identifier of a context.
         * @example be8bb2e3-c3d6-4098-89f4-572ff976ba9a
         */
        context_id: string;
        /**
         * @description An opaque identifier of a context restriction.
         * @example 1c23d2cb-07b1-4a28-8af3-e369732050ed
         */
        restriction_id: string;
        /**
         * @description The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.
         * @example gh
         */
        provider: string;
        /**
         * @description The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).
         * @example CircleCI-Public
         */
        organization: string;
        /**
         * @description The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).
         * @example api-preview-docs
         */
        project: string;
        /**
         * @description An opaque identifier of an organization.
         * @example b9291e0d-a11e-41fb-8517-c545388b5953
         */
        org_id: string;
        /**
         * @description An opaque identifier of a user.
         * @example a68942a8-c217-4d92-96e5-3b47f9a2f0d9
         */
        user_id: string;
        /** @description The number of results per page. */
        limit: number;
        /** @description Specify what page of results to fetch. */
        next_page_token: string;
        /**
         * @description An opaque identifier of a group.
         * @example 39f660db-f49b-417e-ad79-2769ba29faf7
         */
        group_id: string;
        /**
         * @description An opaque identifier of a project.
         * @example 39723015-b399-4601-9ff6-bd1bfbed8fa8
         */
        project_id: string;
        /**
         * @description An opaque identifier of a usage export job.
         * @example e8235eed-f121-4ae3-9c72-2719d6572818
         */
        usage_export_job_id: string;
        /**
         * @description The namespace that the Orb belongs to.
         * @example circleci
         */
        namespace: string;
        /**
         * @description The name of the requested Orb.
         * @example node
         */
        name: string;
        /**
         * @description An opaque identifier of an orb.
         * @example d8a1f419-e207-40f5-8b31-cbc6486b45d8
         */
        orb_id: string;
        /**
         * @description The specific version of an Orb.
         * @example 3.1.2
         */
        version: string;
        /**
         * @description The namespace that the Orb belongs to.
         * @example circleci
         */
        namespace_path: string;
        /**
         * @description The name of the requested Orb.
         * @example node
         */
        name_path: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    listContexts: {
        parameters: {
            query?: {
                /** @description The unique ID of the owner of the context. Specify either this or owner-slug. */
                "owner-id"?: string;
                /** @description A string that represents an organization. Specify either this or owner-id. Cannot be used for accounts. */
                "owner-slug"?: string;
                /** @description The type of the owner. Defaults to "organization". Accounts are only used as context owners in server. */
                "owner-type"?: "account" | "organization";
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated list of contexts */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the context.
                             */
                            id: string;
                            /** @description The user defined name of the context. */
                            name: string;
                            /**
                             * Format: date-time
                             * @description The date and time the context was created.
                             * @example 2015-09-21T17:29:21.042Z
                             */
                            created_at: string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    createContext: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The user defined name of the context. */
                    name: string;
                    owner: {
                        /**
                         * Format: uuid
                         * @description The unique ID of the owner of the context. Specify either this or slug.
                         */
                        id: string;
                        /**
                         * @description The type of the owner. Defaults to "organization". Accounts are only used as context owners in server.
                         * @example organization
                         * @enum {string}
                         */
                        type?: "account" | "organization";
                    } | {
                        /** @description A string that represents an organization. Specify either this or id. Cannot be used for accounts. */
                        slug: string;
                        /**
                         * @description The type of owner. Defaults to "organization". Accounts are only used as context owners in server and must be specified by an id instead of a slug.
                         * @enum {string}
                         */
                        type?: "organization";
                    };
                };
            };
        };
        responses: {
            /** @description The new context */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the context.
                         */
                        id: string;
                        /** @description The user defined name of the context. */
                        name: string;
                        /**
                         * Format: date-time
                         * @description The date and time the context was created.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        created_at: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getContext: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the context (UUID) */
                "context-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The context */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the context.
                         */
                        id: string;
                        /** @description The user defined name of the context. */
                        name: string;
                        /**
                         * Format: date-time
                         * @description The date and time the context was created.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        created_at: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    deleteContext: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the context (UUID) */
                "context-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A confirmation message */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listEnvironmentVariablesFromContext: {
        parameters: {
            query?: {
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
            };
            header?: never;
            path: {
                /** @description ID of the context (UUID) */
                "context-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated list of environment variables */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * @description The name of the environment variable
                             * @example POSTGRES_USER
                             */
                            variable: string;
                            /**
                             * Format: date-time
                             * @description The date and time the environment variable was created.
                             * @example 2015-09-21T17:29:21.042Z
                             */
                            created_at: string;
                            /**
                             * Format: date-time
                             * @description The date and time the environment variable was updated
                             * @example 2015-09-21T17:29:21.042Z
                             */
                            updated_at: string;
                            /**
                             * Format: uuid
                             * @description ID of the context (UUID)
                             */
                            context_id: string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    addEnvironmentVariableToContext: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the context (UUID) */
                "context-id": string;
                /**
                 * @description The name of the environment variable
                 * @example POSTGRES_USER
                 */
                "env-var-name": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description The value of the environment variable
                     * @example some-secret-value
                     */
                    value: string;
                };
            };
        };
        responses: {
            /** @description The new environment variable */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description The name of the environment variable
                         * @example POSTGRES_USER
                         */
                        variable: string;
                        /**
                         * Format: date-time
                         * @description The date and time the environment variable was created.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        created_at: string;
                        /**
                         * Format: date-time
                         * @description The date and time the environment variable was updated
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        updated_at: string;
                        /**
                         * Format: uuid
                         * @description ID of the context (UUID)
                         */
                        context_id: string;
                    } | {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    deleteEnvironmentVariableFromContext: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The name of the environment variable
                 * @example POSTGRES_USER
                 */
                "env-var-name": string;
                /** @description ID of the context (UUID) */
                "context-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A confirmation message */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getProjectWorkflowsPageData: {
        parameters: {
            query?: {
                /**
                 * @description The time window used to calculate summary metrics. If not provided, defaults to last-90-days
                 * @example last-90-days
                 */
                "reporting-window"?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days";
                /**
                 * @description The names of VCS branches to include in branch-level workflow metrics.
                 * @example A single branch: ?branches=main or for multiple branches: ?branches=main&branches=feature&branches=dev
                 */
                branches?: Record<string, never>;
                /**
                 * @description The names of workflows to include in workflow-level metrics.
                 * @example A single workflow name: ?workflow-names=build-test-deploy or
                 *         for multiple workflow names: ?workflow-names=build&workflow-names=test-and-deploy.
                 */
                "workflow-names"?: Record<string, never>;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Aggregated summary metrics and trends by workflow and branches */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The unique ID of the organization */
                        org_id?: unknown;
                        /** @description The unique ID of the project */
                        project_id?: unknown;
                        /** @description Metrics and trends data aggregated for a given project. */
                        project_data?: {
                            /** @description Metrics aggregated across all workflows and branches for a project. */
                            metrics: {
                                /**
                                 * Format: int64
                                 * @description The total number of runs, including runs that are still on-hold or running.
                                 */
                                total_runs: number;
                                /**
                                 * Format: int64
                                 * @description Total duration, in seconds.
                                 */
                                total_duration_secs: number;
                                /**
                                 * Format: int64
                                 * @description The total credits consumed over the current timeseries interval.
                                 */
                                total_credits_used: number;
                                /** Format: float */
                                success_rate: number;
                                /**
                                 * Format: float
                                 * @description The average number of runs per day.
                                 */
                                throughput: number;
                            };
                            /** @description Metric trends aggregated across all workflows and branches for a project. */
                            trends: {
                                /**
                                 * Format: float
                                 * @description The trend value for total number of runs.
                                 */
                                total_runs: number;
                                /**
                                 * Format: float
                                 * @description Trend value for total duration.
                                 */
                                total_duration_secs: number;
                                /**
                                 * Format: float
                                 * @description The trend value for total credits consumed.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: float
                                 * @description The trend value for the success rate.
                                 */
                                success_rate: number;
                                /**
                                 * Format: float
                                 * @description Trend value for the average number of runs per day.
                                 */
                                throughput: number;
                            };
                        };
                        /** @description A list of metrics and trends data for workflows for a given project. */
                        project_workflow_data?: {
                            /**
                             * @description The name of the workflow.
                             * @example build-and-test
                             */
                            workflow_name: string;
                            /** @description Metrics aggregated across a workflow or branchfor a project. */
                            metrics: {
                                /**
                                 * Format: int64
                                 * @description The total credits consumed over the current timeseries interval.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: float
                                 * @description The 95th percentile duration among a group of workflow runs.
                                 */
                                p95_duration_secs: number;
                                /**
                                 * Format: int64
                                 * @description The total number of runs, including runs that are still on-hold or running.
                                 */
                                total_runs: number;
                                /** Format: float */
                                success_rate: number;
                            };
                            /** @description Trends aggregated across a workflow or branch for a project. */
                            trends: {
                                /**
                                 * Format: float
                                 * @description The trend value for total credits consumed.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: float
                                 * @description The 95th percentile duration among a group of workflow runs.
                                 */
                                p95_duration_secs: number;
                                /**
                                 * Format: float
                                 * @description The trend value for total number of runs.
                                 */
                                total_runs: number;
                                /**
                                 * Format: float
                                 * @description The trend value for the success rate.
                                 */
                                success_rate: number;
                            };
                        }[];
                        /** @description A list of metrics and trends data for branches for a given project. */
                        project_workflow_branch_data?: {
                            /**
                             * @description The name of the workflow.
                             * @example build-and-test
                             */
                            workflow_name: string;
                            /**
                             * @description The VCS branch of a workflow's trigger.
                             * @example main
                             */
                            branch: string;
                            /** @description Metrics aggregated across a workflow or branchfor a project. */
                            metrics: {
                                /**
                                 * Format: int64
                                 * @description The total credits consumed over the current timeseries interval.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: float
                                 * @description The 95th percentile duration among a group of workflow runs.
                                 */
                                p95_duration_secs: number;
                                /**
                                 * Format: int64
                                 * @description The total number of runs, including runs that are still on-hold or running.
                                 */
                                total_runs: number;
                                /** Format: float */
                                success_rate: number;
                            };
                            /** @description Trends aggregated across a workflow or branch for a project. */
                            trends: {
                                /**
                                 * Format: float
                                 * @description The trend value for total credits consumed.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: float
                                 * @description The 95th percentile duration among a group of workflow runs.
                                 */
                                p95_duration_secs: number;
                                /**
                                 * Format: float
                                 * @description The trend value for total number of runs.
                                 */
                                total_runs: number;
                                /**
                                 * Format: float
                                 * @description The trend value for the success rate.
                                 */
                                success_rate: number;
                            };
                        }[];
                        /** @description A list of all the branches for a given project. */
                        all_branches?: string[];
                        /** @description A list of all the workflows for a given project. */
                        all_workflows?: string[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getJobTimeseries: {
        parameters: {
            query?: {
                /** @description The name of a vcs branch. If not passed we will scope the API call to the default branch. */
                branch?: string;
                /**
                 * @description The granularity for which to query timeseries data.
                 * @example hourly
                 */
                granularity?: "daily" | "hourly";
                /**
                 * @description Include only executions that started at or after this date. This must be specified if an end-date is provided.
                 * @example 2020-08-21T13:26:29Z
                 */
                "start-date"?: string;
                /**
                 * @description Include only executions that started before this date. This date can be at most 90 days after the start-date.
                 * @example 2020-09-04T13:26:29Z
                 */
                "end-date"?: string;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description The name of the workflow.
                 * @example build-and-test
                 */
                "workflow-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description An array of timeseries data, one entry per job. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                        /** @description Aggregate metrics for a workflow at a time granularity */
                        items: {
                            /**
                             * @description The name of the workflow.
                             * @example build-and-test
                             */
                            name: string;
                            /**
                             * Format: date-time
                             * @description The start time for the earliest execution included in the metrics.
                             */
                            min_started_at: string;
                            /**
                             * Format: date-time
                             * @description The end time of the last execution included in the metrics.
                             */
                            max_ended_at: string;
                            /**
                             * Format: date-time
                             * @description The start of the interval for timeseries metrics.
                             */
                            timestamp: string;
                            /** @description Metrics relating to a workflow's runs. */
                            metrics: {
                                /**
                                 * Format: int64
                                 * @description The total number of runs, including runs that are still on-hold or running.
                                 */
                                total_runs: number;
                                /**
                                 * Format: int64
                                 * @description The number of failed runs.
                                 */
                                failed_runs: number;
                                /**
                                 * Format: int64
                                 * @description The number of successful runs.
                                 */
                                successful_runs: number;
                                /**
                                 * Format: float
                                 * @description The average number of runs per day.
                                 */
                                throughput: number;
                                /**
                                 * Format: int64
                                 * @description The median credits consumed over the current timeseries interval.
                                 */
                                median_credits_used: number;
                                /**
                                 * Format: int64
                                 * @description The total credits consumed over the current timeseries interval.
                                 */
                                total_credits_used: number;
                                /** @description Metrics relating to the duration of runs for a workflow. */
                                duration_metrics: {
                                    /**
                                     * Format: int64
                                     * @description The minimum duration, in seconds, among a group of runs.
                                     */
                                    min: number;
                                    /**
                                     * Format: int64
                                     * @description The median duration, in seconds, among a group of runs.
                                     */
                                    median: number;
                                    /**
                                     * Format: int64
                                     * @description The max duration, in seconds, among a group of runs.
                                     */
                                    max: number;
                                    /**
                                     * Format: int64
                                     * @description The 95th percentile duration, in seconds, among a group of runs.
                                     */
                                    p95: number;
                                    /**
                                     * Format: int64
                                     * @description The total duration, in seconds, added across a group of runs.
                                     */
                                    total: number;
                                };
                            };
                        }[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getOrgSummaryData: {
        parameters: {
            query?: {
                /**
                 * @description The time window used to calculate summary metrics. If not provided, defaults to last-90-days
                 * @example last-90-days
                 */
                "reporting-window"?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days";
                /**
                 * @description List of project names.
                 * @example For a single project: ?project-names=some-project or for multiple projects: ?project-names=some-project1&project-names=some-project2
                 */
                "project-names"?: Record<string, never>;
            };
            header?: never;
            path: {
                /**
                 * @description Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped.
                 * @example gh/CircleCI-Public
                 */
                "org-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description summary metrics with trends for an entire org and it's projects. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Aggregated metrics for an org, with trends. */
                        org_data: {
                            /** @description Metrics for a single org metrics. */
                            metrics: {
                                /**
                                 * Format: int64
                                 * @description The total number of runs, including runs that are still on-hold or running.
                                 */
                                total_runs: number;
                                /**
                                 * Format: int64
                                 * @description Total duration, in seconds.
                                 */
                                total_duration_secs: number;
                                /**
                                 * Format: int64
                                 * @description The total credits consumed over the current timeseries interval.
                                 */
                                total_credits_used: number;
                                /** Format: float */
                                success_rate: number;
                                /**
                                 * Format: float
                                 * @description The average number of runs per day.
                                 */
                                throughput: number;
                            };
                            /** @description Trends for a single org. */
                            trends: {
                                /**
                                 * Format: float
                                 * @description The trend value for total number of runs.
                                 */
                                total_runs: number;
                                /**
                                 * Format: float
                                 * @description Trend value for total duration.
                                 */
                                total_duration_secs: number;
                                /**
                                 * Format: float
                                 * @description The trend value for total credits consumed.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: float
                                 * @description The trend value for the success rate.
                                 */
                                success_rate: number;
                                /**
                                 * Format: float
                                 * @description Trend value for the average number of runs per day.
                                 */
                                throughput: number;
                            };
                        };
                        /** @description Metrics for a single project, across all branches */
                        org_project_data: {
                            /**
                             * @description The name of the project.
                             * @example api-preview-docs
                             */
                            project_name: string;
                            /** @description Metrics for a single project, across all branches. */
                            metrics: {
                                /**
                                 * Format: int64
                                 * @description The total credits consumed over the current timeseries interval.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: int64
                                 * @description Total duration, in seconds.
                                 */
                                total_duration_secs: number;
                                /**
                                 * Format: int64
                                 * @description The total number of runs, including runs that are still on-hold or running.
                                 */
                                total_runs: number;
                                /** Format: float */
                                success_rate: number;
                            };
                            /** @description Trends for a single project, across all branches. */
                            trends: {
                                /**
                                 * Format: float
                                 * @description The trend value for total credits consumed.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: float
                                 * @description Trend value for total duration.
                                 */
                                total_duration_secs: number;
                                /**
                                 * Format: float
                                 * @description The trend value for total number of runs.
                                 */
                                total_runs: number;
                                /**
                                 * Format: float
                                 * @description The trend value for the success rate.
                                 */
                                success_rate: number;
                            };
                        }[];
                        /** @description A list of all the project names in the organization. */
                        all_projects: string[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getAllInsightsBranches: {
        parameters: {
            query?: {
                /**
                 * @description The name of a workflow. If not passed we will scope the API call to the project.
                 * @example build-and-test
                 */
                "workflow-name"?: string;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of branches for a project */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The unique ID of the organization */
                        org_id: unknown;
                        /** @description The unique ID of the project */
                        project_id: unknown;
                        /** @description A list of all the branches for a given project. */
                        branches: string[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getFlakyTests: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of flaky tests for a project */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A list of all instances of flakes. Note that a test is no longer considered flaky after 2 weeks have passed without a flake. Each flake resets this timer. */
                        "flaky-tests": {
                            "time-wasted"?: number;
                            /** @description The date and time when workflow was created. */
                            "workflow-created-at": string;
                            /** @description The ID of the workflow associated with the provided test counts */
                            "workflow-id": unknown;
                            /** @description The class the test belongs to. */
                            classname: string;
                            /** @description The number of the pipeline. */
                            "pipeline-number": number;
                            /** @description The name of the workflow. */
                            "workflow-name": string;
                            /** @description The name of the test. */
                            "test-name": string;
                            /** @description The name of the job. */
                            "job-name": string;
                            /** @description The number of the job. */
                            "job-number": number;
                            /**
                             * Format: int64
                             * @description The number of times the test flaked.
                             */
                            "times-flaked": number;
                            /** @description The source of the test. */
                            source: string;
                            /** @description The file the test belongs to. */
                            file: string;
                        }[];
                        /**
                         * Format: double
                         * @description A count of unique tests that have failed. If your project has N tests that have flaked multiple times each, this will be equal to N.
                         * @example 5
                         */
                        "total-flaky-tests": number;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getProjectWorkflowMetrics: {
        parameters: {
            query?: {
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
                /** @description Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter. */
                "all-branches"?: boolean;
                /** @description The name of a vcs branch. If not passed we will scope the API call to the default branch. */
                branch?: string;
                /**
                 * @description The time window used to calculate summary metrics. If not provided, defaults to last-90-days
                 * @example last-90-days
                 */
                "reporting-window"?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days";
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated list of summary metrics by workflow */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Workflow summary metrics. */
                        items: {
                            /**
                             * @description The name of the workflow.
                             * @example build-and-test
                             */
                            name: string;
                            /** @description Metrics relating to a workflow's runs. */
                            metrics: {
                                /**
                                 * Format: int64
                                 * @description The total number of runs, including runs that are still on-hold or running.
                                 */
                                total_runs: number;
                                /**
                                 * Format: int64
                                 * @description The number of successful runs.
                                 */
                                successful_runs: number;
                                /**
                                 * Format: int64
                                 * @description The mean time to recovery (mean time between failures and their next success) in seconds.
                                 */
                                mttr: number;
                                /**
                                 * Format: int64
                                 * @description The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: int64
                                 * @description The number of failed runs.
                                 */
                                failed_runs: number;
                                /** Format: float */
                                success_rate: number;
                                /** @description Metrics relating to the duration of runs for a workflow. */
                                duration_metrics: {
                                    /**
                                     * Format: int64
                                     * @description The minimum duration, in seconds, among a group of runs.
                                     */
                                    min: number;
                                    /**
                                     * Format: int64
                                     * @description The mean duration, in seconds, among a group of runs.
                                     */
                                    mean: number;
                                    /**
                                     * Format: int64
                                     * @description The median duration, in seconds, among a group of runs.
                                     */
                                    median: number;
                                    /**
                                     * Format: int64
                                     * @description The 95th percentile duration, in seconds, among a group of runs.
                                     */
                                    p95: number;
                                    /**
                                     * Format: int64
                                     * @description The max duration, in seconds, among a group of runs.
                                     */
                                    max: number;
                                    /**
                                     * Format: float
                                     * @description The standard deviation, in seconds, among a group of runs.
                                     */
                                    standard_deviation: number;
                                };
                                /**
                                 * Format: int64
                                 * @description The number of recovered workflow executions per day.
                                 */
                                total_recoveries: number;
                                /**
                                 * Format: float
                                 * @description The average number of runs per day.
                                 */
                                throughput: number;
                            };
                            /**
                             * Format: date-time
                             * @description The timestamp of the first build within the requested reporting window.
                             */
                            window_start: string;
                            /**
                             * Format: date-time
                             * @description The timestamp of the last build within the requested reporting window.
                             */
                            window_end: string;
                            /** @description The unique ID of the project */
                            project_id: unknown;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getProjectWorkflowRuns: {
        parameters: {
            query?: {
                /** @description Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter. */
                "all-branches"?: boolean;
                /** @description The name of a vcs branch. If not passed we will scope the API call to the default branch. */
                branch?: string;
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
                /**
                 * @description Include only executions that started at or after this date. This must be specified if an end-date is provided.
                 * @example 2020-08-21T13:26:29Z
                 */
                "start-date"?: string;
                /**
                 * @description Include only executions that started before this date. This date can be at most 90 days after the start-date.
                 * @example 2020-09-04T13:26:29Z
                 */
                "end-date"?: string;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description The name of the workflow.
                 * @example build-and-test
                 */
                "workflow-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated list of recent workflow runs */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Recent workflow runs. */
                        items: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the workflow.
                             */
                            id: string;
                            /**
                             * @description The VCS branch of a Workflow's trigger.
                             * @example main
                             */
                            branch: string;
                            /**
                             * Format: int64
                             * @description The duration in seconds of a run.
                             */
                            duration: number;
                            /**
                             * Format: date-time
                             * @description The date and time the workflow was created.
                             */
                            created_at: string;
                            /**
                             * Format: date-time
                             * @description The date and time the workflow stopped.
                             */
                            stopped_at: string;
                            /**
                             * Format: int64
                             * @description The number of credits used during execution. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
                             */
                            credits_used: number;
                            /**
                             * @description Workflow status.
                             * @enum {string}
                             */
                            status: "success" | "failed" | "error" | "canceled" | "unauthorized";
                            /**
                             * @description Describes if the job is an approval job or not. Approval jobs are intermediary jobs that are created to pause the workflow until approved.
                             * @example false
                             */
                            is_approval: boolean;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getProjectWorkflowJobMetrics: {
        parameters: {
            query?: {
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
                /** @description Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter. */
                "all-branches"?: boolean;
                /** @description The name of a vcs branch. If not passed we will scope the API call to the default branch. */
                branch?: string;
                /**
                 * @description The time window used to calculate summary metrics. If not provided, defaults to last-90-days
                 * @example last-90-days
                 */
                "reporting-window"?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days";
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description The name of the workflow.
                 * @example build-and-test
                 */
                "workflow-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated list of summary metrics by workflow job. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Job summary metrics. */
                        items: {
                            /** @description The name of the job. */
                            name: string;
                            /** @description Metrics relating to a workflow job's runs. */
                            metrics: {
                                /**
                                 * Format: int64
                                 * @description The total number of runs, including runs that are still on-hold or running.
                                 */
                                total_runs: number;
                                /**
                                 * Format: int64
                                 * @description The number of failed runs.
                                 */
                                failed_runs: number;
                                /**
                                 * Format: int64
                                 * @description The number of successful runs.
                                 */
                                successful_runs: number;
                                /** @description Metrics relating to the duration of runs for a workflow job. */
                                duration_metrics: {
                                    /**
                                     * Format: int64
                                     * @description The minimum duration, in seconds, among a group of runs.
                                     */
                                    min: number;
                                    /**
                                     * Format: int64
                                     * @description The mean duration, in seconds, among a group of runs.
                                     */
                                    mean: number;
                                    /**
                                     * Format: int64
                                     * @description The median duration, in seconds, among a group of runs.
                                     */
                                    median: number;
                                    /**
                                     * Format: int64
                                     * @description The 95th percentile duration, in seconds, among a group of runs.
                                     */
                                    p95: number;
                                    /**
                                     * Format: int64
                                     * @description The max duration, in seconds, among a group of runs.
                                     */
                                    max: number;
                                    /**
                                     * Format: float
                                     * @description The standard deviation, in seconds, among a group of runs.
                                     */
                                    standard_deviation: number;
                                };
                                /** Format: float */
                                success_rate: number;
                                /**
                                 * Format: int64
                                 * @description The total credits consumed by the job in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
                                 */
                                total_credits_used: number;
                                /**
                                 * Format: float
                                 * @description The average number of runs per day.
                                 */
                                throughput: number;
                            };
                            /**
                             * Format: date-time
                             * @description The timestamp of the first build within the requested reporting window.
                             */
                            window_start: string;
                            /**
                             * Format: date-time
                             * @description The timestamp of the last build within the requested reporting window.
                             */
                            window_end: string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getWorkflowSummary: {
        parameters: {
            query?: {
                /** @description Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter. */
                "all-branches"?: boolean;
                /** @description The name of a vcs branch. If not passed we will scope the API call to the default branch. */
                branch?: string;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description The name of the workflow.
                 * @example build-and-test
                 */
                "workflow-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metrics and trends for a workflow */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Metrics aggregated across a workflow for a given time window. */
                        metrics: {
                            /**
                             * Format: int64
                             * @description The total number of runs, including runs that are still on-hold or running.
                             */
                            total_runs: number;
                            /**
                             * Format: int64
                             * @description The number of successful runs.
                             */
                            successful_runs: number;
                            /**
                             * Format: int64
                             * @description The mean time to recovery (mean time between failures and their next success) in seconds.
                             */
                            mttr: number;
                            /**
                             * Format: int64
                             * @description The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
                             */
                            total_credits_used: number;
                            /**
                             * Format: int64
                             * @description The number of failed runs.
                             */
                            failed_runs: number;
                            /** Format: float */
                            success_rate: number;
                            /**
                             * Format: int64
                             * @description The number of runs that ran to completion within the aggregation window
                             */
                            completed_runs: number;
                            /**
                             * Format: date-time
                             * @description The timestamp of the first build within the requested reporting window.
                             */
                            window_start: string;
                            /** @description Metrics relating to the duration of runs for a workflow. */
                            duration_metrics: {
                                /**
                                 * Format: int64
                                 * @description The minimum duration, in seconds, among a group of runs.
                                 */
                                min: number;
                                /**
                                 * Format: int64
                                 * @description The mean duration, in seconds, among a group of runs.
                                 */
                                mean: number;
                                /**
                                 * Format: int64
                                 * @description The median duration, in seconds, among a group of runs.
                                 */
                                median: number;
                                /**
                                 * Format: int64
                                 * @description The 95th percentile duration, in seconds, among a group of runs.
                                 */
                                p95: number;
                                /**
                                 * Format: int64
                                 * @description The max duration, in seconds, among a group of runs.
                                 */
                                max: number;
                                /**
                                 * Format: float
                                 * @description The standard deviation, in seconds, among a group of runs.
                                 */
                                standard_deviation: number;
                            };
                            /**
                             * Format: date-time
                             * @description The timestamp of the last build within the requested reporting window.
                             */
                            window_end: string;
                            /**
                             * Format: float
                             * @description The average number of runs per day.
                             */
                            throughput: number;
                        };
                        /** @description Trends for aggregated metrics across a workflow for a given time window. */
                        trends: {
                            /**
                             * Format: float
                             * @description The trend value for total number of runs.
                             */
                            total_runs: number;
                            /**
                             * Format: float
                             * @description The trend value for number of failed runs.
                             */
                            failed_runs: number;
                            /**
                             * Format: float
                             * @description The trend value for the success rate.
                             */
                            success_rate: number;
                            /**
                             * Format: float
                             * @description Trend value for the 95th percentile duration for a workflow for a given time window.
                             */
                            p95_duration_secs: number;
                            /**
                             * Format: float
                             * @description Trend value for the 50th percentile duration for a workflow for a given time window.
                             */
                            median_duration_secs: number;
                            /**
                             * Format: float
                             * @description The trend value for total credits consumed.
                             */
                            total_credits_used: number;
                            /**
                             * Format: float
                             * @description trend for mean time to recovery (mean time between failures and their next success).
                             */
                            mttr: number;
                            /**
                             * Format: float
                             * @description Trend value for the average number of runs per day.
                             */
                            throughput: number;
                        };
                        /** @description A list of all the workflow names for a given project. */
                        workflow_names: string[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getProjectWorkflowTestMetrics: {
        parameters: {
            query?: {
                /** @description The name of a vcs branch. If not passed we will scope the API call to the default branch. */
                branch?: string;
                /** @description Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter. */
                "all-branches"?: boolean;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description The name of the workflow.
                 * @example build-and-test
                 */
                "workflow-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of test metrics by workflow */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: int64
                         * @description The average number of tests executed per run
                         */
                        average_test_count: number;
                        /** @description Metrics for the most frequently failing tests */
                        most_failed_tests: {
                            /**
                             * Format: double
                             * @description The 95th percentile duration, in seconds, among a group of test runs.
                             */
                            p95_duration: number;
                            /**
                             * Format: int64
                             * @description The total number of times the test was run.
                             */
                            total_runs: number;
                            /** @description The class the test belongs to. */
                            classname: string;
                            /**
                             * Format: int64
                             * @description The number of times the test failed
                             */
                            failed_runs: number;
                            /** @description Whether the test is flaky. */
                            flaky: boolean;
                            /** @description The source of the test. */
                            source: string;
                            /** @description The file the test belongs to. */
                            file: string;
                            /** @description The name of the job. */
                            job_name: string;
                            /** @description The name of the test. */
                            test_name: string;
                        }[];
                        /**
                         * Format: int64
                         * @description The number of tests with the same success rate being omitted from most_failed_tests
                         */
                        most_failed_tests_extra: number;
                        /** @description Metrics for the slowest running tests */
                        slowest_tests: {
                            /**
                             * Format: double
                             * @description The 95th percentile duration, in seconds, among a group of test runs.
                             */
                            p95_duration: number;
                            /**
                             * Format: int64
                             * @description The total number of times the test was run.
                             */
                            total_runs: number;
                            /** @description The class the test belongs to. */
                            classname: string;
                            /**
                             * Format: int64
                             * @description The number of times the test failed
                             */
                            failed_runs: number;
                            /** @description Whether the test is flaky. */
                            flaky: boolean;
                            /** @description The source of the test. */
                            source: string;
                            /** @description The file the test belongs to. */
                            file: string;
                            /** @description The name of the job. */
                            job_name: string;
                            /** @description The name of the test. */
                            test_name: string;
                        }[];
                        /**
                         * Format: int64
                         * @description The number of tests with the same duration rate being omitted from slowest_tests
                         */
                        slowest_tests_extra: number;
                        /**
                         * Format: int64
                         * @description The total number of test runs
                         */
                        total_test_runs: number;
                        /** @description Test counts grouped by pipeline number and workflow id */
                        test_runs: {
                            /**
                             * Format: int64
                             * @description The number of the pipeline associated with the provided test counts
                             */
                            pipeline_number: number;
                            /** @description The ID of the workflow associated with the provided test counts */
                            workflow_id: unknown;
                            /**
                             * Format: float
                             * @description The success rate calculated from test counts
                             */
                            success_rate: number;
                            /** @description Test counts for a given pipeline number */
                            test_counts: {
                                /**
                                 * Format: int64
                                 * @description The number of tests with the error status
                                 */
                                error: number;
                                /**
                                 * Format: int64
                                 * @description The number of tests with the failure status
                                 */
                                failure: number;
                                /**
                                 * Format: int64
                                 * @description The number of tests with the skipped status
                                 */
                                skipped: number;
                                /**
                                 * Format: int64
                                 * @description The number of tests with the success status
                                 */
                                success: number;
                                /**
                                 * Format: int64
                                 * @description The total number of tests
                                 */
                                total: number;
                            };
                        }[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getCurrentUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User login information. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the user.
                         */
                        id: string;
                        /**
                         * Login
                         * @description The login information for the user on the VCS.
                         */
                        login: string;
                        /** @description The name of the user. */
                        name: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getCollaborations: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Collaborations */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The UUID of the organization
                         */
                        id: string;
                        /** @description The VCS provider */
                        "vcs-type": string;
                        /** @description The name of the organization */
                        name: string;
                        /** @description URL to the user's avatar on the VCS */
                        avatar_url: string;
                        /** @description The slug of the organization */
                        slug: string;
                    }[];
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listPipelines: {
        parameters: {
            query?: {
                /**
                 * @description Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).
                 * @example gh/CircleCI-Public
                 */
                "org-slug"?: string;
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
                /** @description Only include entries created by your user. */
                mine?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A sequence of pipelines. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the pipeline.
                             * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                             */
                            id: string;
                            /** @description A sequence of errors that have occurred within the pipeline. */
                            errors: {
                                /**
                                 * @description The type of error.
                                 * @enum {string}
                                 */
                                type: "config" | "config-fetch" | "timeout" | "permission" | "other" | "trigger-rule" | "plan";
                                /** @description A human-readable error message. */
                                message: string;
                            }[];
                            /**
                             * @description The project-slug for the pipeline.
                             * @example gh/CircleCI-Public/api-preview-docs
                             */
                            project_slug: string;
                            /**
                             * Format: date-time
                             * @description The date and time the pipeline was last updated.
                             */
                            updated_at?: string;
                            /**
                             * Format: int64
                             * @description The number of the pipeline.
                             * @example 25
                             */
                            number: number;
                            trigger_parameters?: {
                                [key: string]: string | number | boolean | Record<string, never>;
                            };
                            /**
                             * @description The current state of the pipeline.
                             * @enum {string}
                             */
                            state: "created" | "errored" | "setup-pending" | "setup" | "pending";
                            /**
                             * Format: date-time
                             * @description The date and time the pipeline was created.
                             */
                            created_at: string;
                            /** @description A summary of the trigger. */
                            trigger: {
                                /**
                                 * @description The type of trigger.
                                 * @enum {string}
                                 */
                                type: "scheduled_pipeline" | "explicit" | "api" | "webhook";
                                /**
                                 * Format: date-time
                                 * @description The date and time the trigger was received.
                                 */
                                received_at: string;
                                /** @description The user who triggered the Pipeline. */
                                actor: {
                                    /**
                                     * Login
                                     * @description The login information for the user on the VCS.
                                     */
                                    login: string;
                                    /** @description URL to the user's avatar on the VCS */
                                    avatar_url: string;
                                };
                            };
                            /** @description VCS information for the pipeline. */
                            vcs?: {
                                /**
                                 * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
                                 * @example GitHub
                                 */
                                provider_name: string;
                                /**
                                 * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs
                                 */
                                target_repository_url: string;
                                /**
                                 * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
                                 * @example feature/design-new-api
                                 */
                                branch?: string;
                                /**
                                 * @description The code review id.
                                 * @example 123
                                 */
                                review_id?: string;
                                /**
                                 * @description The code review URL.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
                                 */
                                review_url?: string;
                                /**
                                 * @description The code revision the pipeline ran.
                                 * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
                                 */
                                revision: string;
                                /**
                                 * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
                                 * @example v3.1.4159
                                 */
                                tag?: string;
                                /** @description The latest commit in the pipeline. */
                                commit?: {
                                    /** @description The subject of the commit message. */
                                    subject: string;
                                    /** @description The body of the commit message. */
                                    body: string;
                                };
                                /**
                                 * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs
                                 */
                                origin_repository_url: string;
                            };
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    continuePipeline: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * PipelineContinuationKey
                     * @description A pipeline continuation key.
                     */
                    "continuation-key": string;
                    /** @description A configuration string for the pipeline. */
                    configuration: string;
                    /**
                     * @description An object containing pipeline parameters and their values. Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.
                     * @example {
                     *       "deploy_prod": true
                     *     }
                     */
                    parameters?: {
                        [key: string]: number | string | boolean;
                    };
                };
            };
        };
        responses: {
            /** @description A confirmation message. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getPipelineById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unique ID of the pipeline.
                 * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                 */
                "pipeline-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A pipeline object. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the pipeline.
                         * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                         */
                        id: string;
                        /** @description A sequence of errors that have occurred within the pipeline. */
                        errors: {
                            /**
                             * @description The type of error.
                             * @enum {string}
                             */
                            type: "config" | "config-fetch" | "timeout" | "permission" | "other" | "trigger-rule" | "plan";
                            /** @description A human-readable error message. */
                            message: string;
                        }[];
                        /**
                         * @description The project-slug for the pipeline.
                         * @example gh/CircleCI-Public/api-preview-docs
                         */
                        project_slug: string;
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was last updated.
                         */
                        updated_at?: string;
                        /**
                         * Format: int64
                         * @description The number of the pipeline.
                         * @example 25
                         */
                        number: number;
                        trigger_parameters?: {
                            [key: string]: string | number | boolean | Record<string, never>;
                        };
                        /**
                         * @description The current state of the pipeline.
                         * @enum {string}
                         */
                        state: "created" | "errored" | "setup-pending" | "setup" | "pending";
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was created.
                         */
                        created_at: string;
                        /** @description A summary of the trigger. */
                        trigger: {
                            /**
                             * @description The type of trigger.
                             * @enum {string}
                             */
                            type: "scheduled_pipeline" | "explicit" | "api" | "webhook";
                            /**
                             * Format: date-time
                             * @description The date and time the trigger was received.
                             */
                            received_at: string;
                            /** @description The user who triggered the Pipeline. */
                            actor: {
                                /**
                                 * Login
                                 * @description The login information for the user on the VCS.
                                 */
                                login: string;
                                /** @description URL to the user's avatar on the VCS */
                                avatar_url: string;
                            };
                        };
                        /** @description VCS information for the pipeline. */
                        vcs?: {
                            /**
                             * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
                             * @example GitHub
                             */
                            provider_name: string;
                            /**
                             * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
                             * @example https://github.com/CircleCI-Public/api-preview-docs
                             */
                            target_repository_url: string;
                            /**
                             * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
                             * @example feature/design-new-api
                             */
                            branch?: string;
                            /**
                             * @description The code review id.
                             * @example 123
                             */
                            review_id?: string;
                            /**
                             * @description The code review URL.
                             * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
                             */
                            review_url?: string;
                            /**
                             * @description The code revision the pipeline ran.
                             * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
                             */
                            revision: string;
                            /**
                             * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
                             * @example v3.1.4159
                             */
                            tag?: string;
                            /** @description The latest commit in the pipeline. */
                            commit?: {
                                /** @description The subject of the commit message. */
                                subject: string;
                                /** @description The body of the commit message. */
                                body: string;
                            };
                            /**
                             * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
                             * @example https://github.com/CircleCI-Public/api-preview-docs
                             */
                            origin_repository_url: string;
                        };
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getPipelineConfigById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unique ID of the pipeline.
                 * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                 */
                "pipeline-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The configuration strings for the pipeline. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The source configuration for the pipeline, before any config compilation has been performed. If there is no config, then this field will be empty. */
                        source: string;
                        /** @description The compiled configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's configuration, then this field may be empty. */
                        compiled: string;
                        /** @description The setup configuration for the pipeline used for Setup Workflows. If there were errors processing the pipeline's configuration or if setup workflows are not enabled, then this field should not exist */
                        "setup-config"?: string;
                        /** @description The compiled setup configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's setup workflows, then this field may be empty. */
                        "compiled-setup-config"?: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listWorkflowsByPipelineId: {
        parameters: {
            query?: {
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
            };
            header?: never;
            path: {
                /**
                 * @description The unique ID of the pipeline.
                 * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                 */
                "pipeline-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated list of workflow objects. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Workflow list
                         * @description A list of workflows.
                         */
                        items: {
                            /**
                             * Format: uuid
                             * @description The ID of the pipeline this workflow belongs to.
                             * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                             */
                            pipeline_id: string;
                            /** Format: uuid */
                            canceled_by?: string;
                            /**
                             * Format: uuid
                             * @description The unique ID of the workflow.
                             */
                            id: string;
                            /**
                             * @description The name of the workflow.
                             * @example build-and-test
                             */
                            name: string;
                            /**
                             * @description The project-slug for the pipeline this workflow belongs to.
                             * @example gh/CircleCI-Public/api-preview-docs
                             */
                            project_slug: string;
                            /** Format: uuid */
                            errored_by?: string;
                            /**
                             * @description Tag used for the workflow
                             * @example setup
                             * @enum {string}
                             */
                            tag?: "setup";
                            /**
                             * @description The current status of the workflow.
                             * @enum {string}
                             */
                            status: "success" | "running" | "not_run" | "failed" | "error" | "failing" | "on_hold" | "canceled" | "unauthorized";
                            /** Format: uuid */
                            started_by: string;
                            /**
                             * Format: int64
                             * @description The number of the pipeline this workflow belongs to.
                             * @example 25
                             */
                            pipeline_number: number;
                            /**
                             * Format: date-time
                             * @description The date and time the workflow was created.
                             */
                            created_at: string;
                            /**
                             * Format: date-time
                             * @description The date and time the workflow stopped.
                             */
                            stopped_at: string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getProjectBySlug: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A project object */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                         * @example gh/CircleCI-Public/api-preview-docs
                         */
                        slug: string;
                        /**
                         * @description The name of the project
                         * @example api-preview-docs
                         */
                        name: string;
                        /** Format: uuid */
                        id: string;
                        /**
                         * @description The name of the organization the project belongs to
                         * @example CircleCI-Public
                         */
                        organization_name: string;
                        /**
                         * @description The slug of the organization the project belongs to
                         * @example CircleCI-Public
                         */
                        organization_slug: string;
                        /**
                         * Format: uuid
                         * @description The id of the organization the project belongs to
                         * @example CircleCI-Public
                         */
                        organization_id: string;
                        /** @description Information about the VCS that hosts the project source code. */
                        vcs_info: {
                            /**
                             * @description URL to the repository hosting the project's code
                             * @example https://github.com/CircleCI-Public/api-preview-docs
                             */
                            vcs_url: string;
                            /**
                             * @description The VCS provider
                             * @enum {string}
                             */
                            provider: "Bitbucket" | "CircleCI" | "GitHub";
                            /** @example main */
                            default_branch: string;
                        };
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listCheckoutKeys: {
        parameters: {
            query?: {
                /** @description The fingerprint digest type to return. This may be either `md5` or `sha256`. If not passed, defaults to `md5`. */
                digest?: "sha256" | "md5";
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A sequence of checkout keys. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * @description A public SSH key.
                             * @example ssh-rsa ...
                             */
                            "public-key": string;
                            /**
                             * CheckoutKeyType
                             * @description The type of checkout key. This may be either `deploy-key` or `github-user-key`.
                             * @example deploy-key
                             * @enum {string}
                             */
                            type: "deploy-key" | "github-user-key";
                            /**
                             * @description An SSH key fingerprint.
                             * @example c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f
                             */
                            fingerprint: string;
                            /**
                             * @description A boolean value that indicates if this key is preferred.
                             * @example true
                             */
                            preferred: boolean;
                            /**
                             * Format: date-time
                             * @description The date and time the checkout key was created.
                             * @example 2015-09-21T17:29:21.042Z
                             */
                            "created-at": string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    createCheckoutKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * CheckoutKeyInputType
                     * @description The type of checkout key to create. This may be either `deploy-key` or `user-key`.
                     * @example deploy-key
                     * @enum {string}
                     */
                    type: "user-key" | "deploy-key";
                };
            };
        };
        responses: {
            /** @description The checkout key. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description A public SSH key.
                         * @example ssh-rsa ...
                         */
                        "public-key": string;
                        /**
                         * CheckoutKeyType
                         * @description The type of checkout key. This may be either `deploy-key` or `github-user-key`.
                         * @example deploy-key
                         * @enum {string}
                         */
                        type: "deploy-key" | "github-user-key";
                        /**
                         * @description An SSH key fingerprint.
                         * @example c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f
                         */
                        fingerprint: string;
                        /**
                         * @description A boolean value that indicates if this key is preferred.
                         * @example true
                         */
                        preferred: boolean;
                        /**
                         * Format: date-time
                         * @description The date and time the checkout key was created.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        "created-at": string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getCheckoutKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description An SSH key fingerprint.
                 * @example c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f
                 */
                fingerprint: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The checkout key. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description A public SSH key.
                         * @example ssh-rsa ...
                         */
                        "public-key": string;
                        /**
                         * CheckoutKeyType
                         * @description The type of checkout key. This may be either `deploy-key` or `github-user-key`.
                         * @example deploy-key
                         * @enum {string}
                         */
                        type: "deploy-key" | "github-user-key";
                        /**
                         * @description An SSH key fingerprint.
                         * @example c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f
                         */
                        fingerprint: string;
                        /**
                         * @description A boolean value that indicates if this key is preferred.
                         * @example true
                         */
                        preferred: boolean;
                        /**
                         * Format: date-time
                         * @description The date and time the checkout key was created.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        "created-at": string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    deleteCheckoutKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description An SSH key fingerprint.
                 * @example c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f
                 */
                fingerprint: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A confirmation message. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listEnvVars: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A sequence of environment variables. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * @description The name of the environment variable.
                             * @example foo
                             */
                            name: string;
                            /**
                             * @description The value of the environment variable.
                             * @example xxxx1234
                             */
                            value: string;
                            /**
                             * @description The creation timestamp of the environment variable.
                             * @example #joda/inst 2023-04-14T21:20:14+0000
                             */
                            "created-at"?: unknown;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    createEnvVar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description The name of the environment variable.
                     * @example foo
                     */
                    name: string;
                    /**
                     * @description The value of the environment variable.
                     * @example xxxx1234
                     */
                    value: string;
                };
            };
        };
        responses: {
            /** @description The environment variable. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description The name of the environment variable.
                         * @example foo
                         */
                        name: string;
                        /**
                         * @description The value of the environment variable.
                         * @example xxxx1234
                         */
                        value: string;
                        /**
                         * @description The creation timestamp of the environment variable.
                         * @example #joda/inst 2023-04-14T21:20:14+0000
                         */
                        "created-at"?: unknown;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getEnvVar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description The name of the environment variable.
                 * @example foo
                 */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The environment variable. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description The name of the environment variable.
                         * @example foo
                         */
                        name: string;
                        /**
                         * @description The value of the environment variable.
                         * @example xxxx1234
                         */
                        value: string;
                        /**
                         * @description The creation timestamp of the environment variable.
                         * @example #joda/inst 2023-04-14T21:20:14+0000
                         */
                        "created-at"?: unknown;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    deleteEnvVar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description The name of the environment variable.
                 * @example foo
                 */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A confirmation message. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getJobDetails: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The number of the job.
                 * @example 123
                 */
                "job-number": unknown;
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Job details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description URL of the job in CircleCI Web UI. */
                        web_url: string;
                        /** @description Information about a project. */
                        project: {
                            /** Format: uuid */
                            id: string;
                            /**
                             * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                             * @example gh/CircleCI-Public/api-preview-docs
                             */
                            slug: string;
                            /**
                             * @description The name of the project
                             * @example api-preview-docs
                             */
                            name: string;
                            /**
                             * @description URL to the repository hosting the project's code
                             * @example https://github.com/CircleCI-Public/api-preview-docs
                             */
                            external_url: string;
                        };
                        /** @description Info about parallels runs and their status. */
                        parallel_runs: {
                            /**
                             * Format: int64
                             * @description Index of the parallel run.
                             */
                            index: number;
                            /** @description Status of the parallel run. */
                            status: string;
                        }[];
                        /**
                         * Format: date-time
                         * @description The date and time the job started.
                         */
                        started_at: string;
                        /** @description Info about the latest workflow the job was a part of. */
                        latest_workflow: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the workflow.
                             */
                            id: string;
                            /**
                             * @description The name of the workflow.
                             * @example build-and-test
                             */
                            name: string;
                        };
                        /** @description The name of the job. */
                        name: string;
                        /** @description Information about executor used for a job. */
                        executor: {
                            /** @description Resource class name. */
                            resource_class: string;
                            /** @description Executor type. */
                            type?: string;
                        };
                        /**
                         * Format: int64
                         * @description A number of parallel runs the job has.
                         */
                        parallelism: number;
                        /**
                         * @description The current status of the job.
                         * @enum {string}
                         */
                        status: "success" | "running" | "not_run" | "failed" | "retried" | "queued" | "not_running" | "infrastructure_fail" | "timedout" | "on_hold" | "terminated-unknown" | "blocked" | "canceled" | "unauthorized";
                        /**
                         * Format: int64
                         * @description The number of the job.
                         */
                        number: number;
                        /** @description Info about a pipeline the job is a part of. */
                        pipeline: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the pipeline.
                             * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                             */
                            id: string;
                        };
                        /**
                         * Format: int64
                         * @description Duration of a job in milliseconds.
                         */
                        duration: number;
                        /**
                         * Format: date-time
                         * @description The time when the job was created.
                         */
                        created_at: string;
                        /** @description Messages from CircleCI execution platform. */
                        messages: {
                            /** @description Message type. */
                            type: string;
                            /** @description Information describing message. */
                            message: string;
                            /** @description Value describing the reason for message to be added to the job. */
                            reason?: string;
                        }[];
                        /** @description List of contexts used by the job. */
                        contexts: {
                            /** @description The name of the context. */
                            name: string;
                        }[];
                        /** @description Information about an organization. */
                        organization: {
                            /** @description The name of the organization. */
                            name: string;
                        };
                        /**
                         * Format: date-time
                         * @description The time when the job was placed in a queue.
                         */
                        queued_at: string;
                        /**
                         * Format: date-time
                         * @description The time when the job stopped.
                         */
                        stopped_at?: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    cancelJob: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The number of the job.
                 * @example 123
                 */
                "job-number": unknown;
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listPipelinesForProject: {
        parameters: {
            query?: {
                /** @description The name of a vcs branch. */
                branch?: string;
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A sequence of pipelines. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the pipeline.
                             * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                             */
                            id: string;
                            /** @description A sequence of errors that have occurred within the pipeline. */
                            errors: {
                                /**
                                 * @description The type of error.
                                 * @enum {string}
                                 */
                                type: "config" | "config-fetch" | "timeout" | "permission" | "other" | "trigger-rule" | "plan";
                                /** @description A human-readable error message. */
                                message: string;
                            }[];
                            /**
                             * @description The project-slug for the pipeline.
                             * @example gh/CircleCI-Public/api-preview-docs
                             */
                            project_slug: string;
                            /**
                             * Format: date-time
                             * @description The date and time the pipeline was last updated.
                             */
                            updated_at?: string;
                            /**
                             * Format: int64
                             * @description The number of the pipeline.
                             * @example 25
                             */
                            number: number;
                            trigger_parameters?: {
                                [key: string]: string | number | boolean | Record<string, never>;
                            };
                            /**
                             * @description The current state of the pipeline.
                             * @enum {string}
                             */
                            state: "created" | "errored" | "setup-pending" | "setup" | "pending";
                            /**
                             * Format: date-time
                             * @description The date and time the pipeline was created.
                             */
                            created_at: string;
                            /** @description A summary of the trigger. */
                            trigger: {
                                /**
                                 * @description The type of trigger.
                                 * @enum {string}
                                 */
                                type: "scheduled_pipeline" | "explicit" | "api" | "webhook";
                                /**
                                 * Format: date-time
                                 * @description The date and time the trigger was received.
                                 */
                                received_at: string;
                                /** @description The user who triggered the Pipeline. */
                                actor: {
                                    /**
                                     * Login
                                     * @description The login information for the user on the VCS.
                                     */
                                    login: string;
                                    /** @description URL to the user's avatar on the VCS */
                                    avatar_url: string;
                                };
                            };
                            /** @description VCS information for the pipeline. */
                            vcs?: {
                                /**
                                 * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
                                 * @example GitHub
                                 */
                                provider_name: string;
                                /**
                                 * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs
                                 */
                                target_repository_url: string;
                                /**
                                 * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
                                 * @example feature/design-new-api
                                 */
                                branch?: string;
                                /**
                                 * @description The code review id.
                                 * @example 123
                                 */
                                review_id?: string;
                                /**
                                 * @description The code review URL.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
                                 */
                                review_url?: string;
                                /**
                                 * @description The code revision the pipeline ran.
                                 * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
                                 */
                                revision: string;
                                /**
                                 * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
                                 * @example v3.1.4159
                                 */
                                tag?: string;
                                /** @description The latest commit in the pipeline. */
                                commit?: {
                                    /** @description The subject of the commit message. */
                                    subject: string;
                                    /** @description The body of the commit message. */
                                    body: string;
                                };
                                /**
                                 * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs
                                 */
                                origin_repository_url: string;
                            };
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    triggerPipeline: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
                     * @example feature/design-new-api
                     */
                    branch?: string;
                    /**
                     * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
                     * @example v3.1.4159
                     */
                    tag?: string;
                    /**
                     * @description An object containing pipeline parameters and their values. Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.
                     * @example {
                     *       "deploy_prod": true
                     *     }
                     */
                    parameters?: {
                        [key: string]: number | string | boolean;
                    };
                };
            };
        };
        responses: {
            /** @description The created pipeline. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the pipeline.
                         * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                         */
                        id: string;
                        /**
                         * @description The current state of the pipeline.
                         * @enum {string}
                         */
                        state: "created" | "errored" | "setup-pending" | "setup" | "pending";
                        /**
                         * Format: int64
                         * @description The number of the pipeline.
                         * @example 25
                         */
                        number: number;
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was created.
                         */
                        created_at: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listMyPipelines: {
        parameters: {
            query?: {
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A sequence of pipelines. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the pipeline.
                             * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                             */
                            id: string;
                            /** @description A sequence of errors that have occurred within the pipeline. */
                            errors: {
                                /**
                                 * @description The type of error.
                                 * @enum {string}
                                 */
                                type: "config" | "config-fetch" | "timeout" | "permission" | "other" | "trigger-rule" | "plan";
                                /** @description A human-readable error message. */
                                message: string;
                            }[];
                            /**
                             * @description The project-slug for the pipeline.
                             * @example gh/CircleCI-Public/api-preview-docs
                             */
                            project_slug: string;
                            /**
                             * Format: date-time
                             * @description The date and time the pipeline was last updated.
                             */
                            updated_at?: string;
                            /**
                             * Format: int64
                             * @description The number of the pipeline.
                             * @example 25
                             */
                            number: number;
                            trigger_parameters?: {
                                [key: string]: string | number | boolean | Record<string, never>;
                            };
                            /**
                             * @description The current state of the pipeline.
                             * @enum {string}
                             */
                            state: "created" | "errored" | "setup-pending" | "setup" | "pending";
                            /**
                             * Format: date-time
                             * @description The date and time the pipeline was created.
                             */
                            created_at: string;
                            /** @description A summary of the trigger. */
                            trigger: {
                                /**
                                 * @description The type of trigger.
                                 * @enum {string}
                                 */
                                type: "scheduled_pipeline" | "explicit" | "api" | "webhook";
                                /**
                                 * Format: date-time
                                 * @description The date and time the trigger was received.
                                 */
                                received_at: string;
                                /** @description The user who triggered the Pipeline. */
                                actor: {
                                    /**
                                     * Login
                                     * @description The login information for the user on the VCS.
                                     */
                                    login: string;
                                    /** @description URL to the user's avatar on the VCS */
                                    avatar_url: string;
                                };
                            };
                            /** @description VCS information for the pipeline. */
                            vcs?: {
                                /**
                                 * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
                                 * @example GitHub
                                 */
                                provider_name: string;
                                /**
                                 * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs
                                 */
                                target_repository_url: string;
                                /**
                                 * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
                                 * @example feature/design-new-api
                                 */
                                branch?: string;
                                /**
                                 * @description The code review id.
                                 * @example 123
                                 */
                                review_id?: string;
                                /**
                                 * @description The code review URL.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
                                 */
                                review_url?: string;
                                /**
                                 * @description The code revision the pipeline ran.
                                 * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
                                 */
                                revision: string;
                                /**
                                 * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
                                 * @example v3.1.4159
                                 */
                                tag?: string;
                                /** @description The latest commit in the pipeline. */
                                commit?: {
                                    /** @description The subject of the commit message. */
                                    subject: string;
                                    /** @description The body of the commit message. */
                                    body: string;
                                };
                                /**
                                 * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
                                 * @example https://github.com/CircleCI-Public/api-preview-docs
                                 */
                                origin_repository_url: string;
                            };
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getPipelineByNumber: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
                /**
                 * @description The number of the pipeline.
                 * @example 123
                 */
                "pipeline-number": unknown;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A pipeline object. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the pipeline.
                         * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                         */
                        id: string;
                        /** @description A sequence of errors that have occurred within the pipeline. */
                        errors: {
                            /**
                             * @description The type of error.
                             * @enum {string}
                             */
                            type: "config" | "config-fetch" | "timeout" | "permission" | "other" | "trigger-rule" | "plan";
                            /** @description A human-readable error message. */
                            message: string;
                        }[];
                        /**
                         * @description The project-slug for the pipeline.
                         * @example gh/CircleCI-Public/api-preview-docs
                         */
                        project_slug: string;
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was last updated.
                         */
                        updated_at?: string;
                        /**
                         * Format: int64
                         * @description The number of the pipeline.
                         * @example 25
                         */
                        number: number;
                        trigger_parameters?: {
                            [key: string]: string | number | boolean | Record<string, never>;
                        };
                        /**
                         * @description The current state of the pipeline.
                         * @enum {string}
                         */
                        state: "created" | "errored" | "setup-pending" | "setup" | "pending";
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was created.
                         */
                        created_at: string;
                        /** @description A summary of the trigger. */
                        trigger: {
                            /**
                             * @description The type of trigger.
                             * @enum {string}
                             */
                            type: "scheduled_pipeline" | "explicit" | "api" | "webhook";
                            /**
                             * Format: date-time
                             * @description The date and time the trigger was received.
                             */
                            received_at: string;
                            /** @description The user who triggered the Pipeline. */
                            actor: {
                                /**
                                 * Login
                                 * @description The login information for the user on the VCS.
                                 */
                                login: string;
                                /** @description URL to the user's avatar on the VCS */
                                avatar_url: string;
                            };
                        };
                        /** @description VCS information for the pipeline. */
                        vcs?: {
                            /**
                             * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
                             * @example GitHub
                             */
                            provider_name: string;
                            /**
                             * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
                             * @example https://github.com/CircleCI-Public/api-preview-docs
                             */
                            target_repository_url: string;
                            /**
                             * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
                             * @example feature/design-new-api
                             */
                            branch?: string;
                            /**
                             * @description The code review id.
                             * @example 123
                             */
                            review_id?: string;
                            /**
                             * @description The code review URL.
                             * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
                             */
                            review_url?: string;
                            /**
                             * @description The code revision the pipeline ran.
                             * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
                             */
                            revision: string;
                            /**
                             * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
                             * @example v3.1.4159
                             */
                            tag?: string;
                            /** @description The latest commit in the pipeline. */
                            commit?: {
                                /** @description The subject of the commit message. */
                                subject: string;
                                /** @description The body of the commit message. */
                                body: string;
                            };
                            /**
                             * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
                             * @example https://github.com/CircleCI-Public/api-preview-docs
                             */
                            origin_repository_url: string;
                        };
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listSchedulesForProject: {
        parameters: {
            query?: {
                /** @description A token to retrieve the next page of results. */
                "page-token"?: string;
            };
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A sequence of schedules. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the schedule.
                             */
                            id: string;
                            /** @description Timetable that specifies when a schedule triggers. */
                            timetable: {
                                /**
                                 * Format: integer
                                 * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                                 */
                                "per-hour": number;
                                /** @description Hours in a day in which the schedule triggers. */
                                "hours-of-day": number[];
                                /** @description Days in a week in which the schedule triggers. */
                                "days-of-week": ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                                /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                                "days-of-month"?: number[];
                                /** @description Months in which the schedule triggers. */
                                months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                            } | {
                                /**
                                 * Format: integer
                                 * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                                 */
                                "per-hour": number;
                                /** @description Hours in a day in which the schedule triggers. */
                                "hours-of-day": number[];
                                /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                                "days-of-month": number[];
                                /** @description Days in a week in which the schedule triggers. */
                                "days-of-week"?: ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                                /** @description Months in which the schedule triggers. */
                                months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                            };
                            /**
                             * Format: date-time
                             * @description The date and time the pipeline was last updated.
                             */
                            "updated-at": string;
                            /** @description Name of the schedule. */
                            name: string;
                            /**
                             * Format: date-time
                             * @description The date and time the pipeline was created.
                             */
                            "created-at": string;
                            /**
                             * @description The project-slug for the schedule
                             * @example gh/CircleCI-Public/api-preview-docs
                             */
                            "project-slug": string;
                            /**
                             * @description Pipeline parameters represented as key-value pairs. Must contain branch or tag.
                             * @example {
                             *       "deploy_prod": true,
                             *       "branch": "feature/design-new-api"
                             *     }
                             */
                            parameters: {
                                [key: string]: number | string | boolean;
                            };
                            /**
                             * User
                             * @description The attribution actor who will run the scheduled pipeline.
                             */
                            actor: {
                                /**
                                 * Format: uuid
                                 * @description The unique ID of the user.
                                 */
                                id: string;
                                /**
                                 * Login
                                 * @description The login information for the user on the VCS.
                                 */
                                login: string;
                                /** @description The name of the user. */
                                name: string;
                            };
                            /** @description Description of the schedule. */
                            description: string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    createSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Name of the schedule. */
                    name: string;
                    /** @description Timetable that specifies when a schedule triggers. */
                    timetable: {
                        /**
                         * Format: integer
                         * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                         */
                        "per-hour": number;
                        /** @description Hours in a day in which the schedule triggers. */
                        "hours-of-day": number[];
                        /** @description Days in a week in which the schedule triggers. */
                        "days-of-week": ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                        /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                        "days-of-month"?: number[];
                        /** @description Months in which the schedule triggers. */
                        months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                    } | {
                        /**
                         * Format: integer
                         * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                         */
                        "per-hour": number;
                        /** @description Hours in a day in which the schedule triggers. */
                        "hours-of-day": number[];
                        /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                        "days-of-month": number[];
                        /** @description Days in a week in which the schedule triggers. */
                        "days-of-week"?: ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                        /** @description Months in which the schedule triggers. */
                        months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                    };
                    /**
                     * @description The attribution-actor of the scheduled pipeline.
                     * @example current
                     * @enum {string}
                     */
                    "attribution-actor": "current" | "system";
                    /**
                     * @description Pipeline parameters represented as key-value pairs. Must contain branch or tag.
                     * @example {
                     *       "deploy_prod": true,
                     *       "branch": "feature/design-new-api"
                     *     }
                     */
                    parameters: {
                        [key: string]: number | string | boolean;
                    };
                    /** @description Description of the schedule. */
                    description?: string;
                };
            };
        };
        responses: {
            /** @description A schedule object. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the schedule.
                         */
                        id: string;
                        /** @description Timetable that specifies when a schedule triggers. */
                        timetable: {
                            /**
                             * Format: integer
                             * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                             */
                            "per-hour": number;
                            /** @description Hours in a day in which the schedule triggers. */
                            "hours-of-day": number[];
                            /** @description Days in a week in which the schedule triggers. */
                            "days-of-week": ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                            /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                            "days-of-month"?: number[];
                            /** @description Months in which the schedule triggers. */
                            months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                        } | {
                            /**
                             * Format: integer
                             * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                             */
                            "per-hour": number;
                            /** @description Hours in a day in which the schedule triggers. */
                            "hours-of-day": number[];
                            /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                            "days-of-month": number[];
                            /** @description Days in a week in which the schedule triggers. */
                            "days-of-week"?: ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                            /** @description Months in which the schedule triggers. */
                            months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                        };
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was last updated.
                         */
                        "updated-at": string;
                        /** @description Name of the schedule. */
                        name: string;
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was created.
                         */
                        "created-at": string;
                        /**
                         * @description The project-slug for the schedule
                         * @example gh/CircleCI-Public/api-preview-docs
                         */
                        "project-slug": string;
                        /**
                         * @description Pipeline parameters represented as key-value pairs. Must contain branch or tag.
                         * @example {
                         *       "deploy_prod": true,
                         *       "branch": "feature/design-new-api"
                         *     }
                         */
                        parameters: {
                            [key: string]: number | string | boolean;
                        };
                        /**
                         * User
                         * @description The attribution actor who will run the scheduled pipeline.
                         */
                        actor: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the user.
                             */
                            id: string;
                            /**
                             * Login
                             * @description The login information for the user on the VCS.
                             */
                            login: string;
                            /** @description The name of the user. */
                            name: string;
                        };
                        /** @description Description of the schedule. */
                        description: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getJobArtifacts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The number of the job.
                 * @example 123
                 */
                "job-number": unknown;
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated list of the job's artifacts. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /** @description The artifact path. */
                            path: string;
                            /**
                             * Format: int64
                             * @description The index of the node that stored the artifact.
                             */
                            node_index: number;
                            /** @description The URL to download the artifact contents. */
                            url: string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getTests: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The number of the job.
                 * @example 123
                 */
                "job-number": unknown;
                /**
                 * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
                 * @example gh/CircleCI-Public/api-preview-docs
                 */
                "project-slug": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated list of test results. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** TestsResponse */
                        items: {
                            /**
                             * @description The failure message associated with the test.
                             * @example
                             */
                            message: string;
                            /**
                             * @description The program that generated the test results
                             * @example
                             */
                            source: string;
                            /**
                             * Format: double
                             * @description The time it took to run the test in seconds
                             * @example
                             */
                            run_time: number;
                            /**
                             * @description The file in which the test is defined.
                             * @example
                             */
                            file: string;
                            /**
                             * @description Indication of whether the test succeeded.
                             * @example
                             */
                            result: string;
                            /**
                             * @description The name of the test.
                             * @example
                             */
                            name: string;
                            /**
                             * @description The programmatic location of the test.
                             * @example
                             */
                            classname: string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getScheduleById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique ID of the schedule. */
                "schedule-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A schedule object. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the schedule.
                         */
                        id: string;
                        /** @description Timetable that specifies when a schedule triggers. */
                        timetable: {
                            /**
                             * Format: integer
                             * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                             */
                            "per-hour": number;
                            /** @description Hours in a day in which the schedule triggers. */
                            "hours-of-day": number[];
                            /** @description Days in a week in which the schedule triggers. */
                            "days-of-week": ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                            /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                            "days-of-month"?: number[];
                            /** @description Months in which the schedule triggers. */
                            months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                        } | {
                            /**
                             * Format: integer
                             * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                             */
                            "per-hour": number;
                            /** @description Hours in a day in which the schedule triggers. */
                            "hours-of-day": number[];
                            /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                            "days-of-month": number[];
                            /** @description Days in a week in which the schedule triggers. */
                            "days-of-week"?: ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                            /** @description Months in which the schedule triggers. */
                            months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                        };
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was last updated.
                         */
                        "updated-at": string;
                        /** @description Name of the schedule. */
                        name: string;
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was created.
                         */
                        "created-at": string;
                        /**
                         * @description The project-slug for the schedule
                         * @example gh/CircleCI-Public/api-preview-docs
                         */
                        "project-slug": string;
                        /**
                         * @description Pipeline parameters represented as key-value pairs. Must contain branch or tag.
                         * @example {
                         *       "deploy_prod": true,
                         *       "branch": "feature/design-new-api"
                         *     }
                         */
                        parameters: {
                            [key: string]: number | string | boolean;
                        };
                        /**
                         * User
                         * @description The attribution actor who will run the scheduled pipeline.
                         */
                        actor: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the user.
                             */
                            id: string;
                            /**
                             * Login
                             * @description The login information for the user on the VCS.
                             */
                            login: string;
                            /** @description The name of the user. */
                            name: string;
                        };
                        /** @description Description of the schedule. */
                        description: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    deleteScheduleById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique ID of the schedule. */
                "schedule-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A confirmation message. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    updateSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique ID of the schedule. */
                "schedule-id": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Description of the schedule. */
                    description?: string;
                    /** @description Name of the schedule. */
                    name?: string;
                    /** @description Timetable that specifies when a schedule triggers. */
                    timetable?: {
                        /**
                         * Format: integer
                         * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                         */
                        "per-hour"?: number;
                        /** @description Hours in a day in which the schedule triggers. */
                        "hours-of-day"?: number[];
                        /** @description Days in a week in which the schedule triggers. */
                        "days-of-week"?: ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                        /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                        "days-of-month"?: number[];
                        /** @description Months in which the schedule triggers. */
                        months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                    };
                    /**
                     * @description The attribution-actor of the scheduled pipeline.
                     * @example current
                     * @enum {string}
                     */
                    "attribution-actor"?: "current" | "system";
                    /**
                     * @description Pipeline parameters represented as key-value pairs. Must contain branch or tag.
                     * @example {
                     *       "deploy_prod": true,
                     *       "branch": "feature/design-new-api"
                     *     }
                     */
                    parameters?: {
                        [key: string]: number | string | boolean;
                    };
                };
            };
        };
        responses: {
            /** @description A schedule object. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the schedule.
                         */
                        id: string;
                        /** @description Timetable that specifies when a schedule triggers. */
                        timetable: {
                            /**
                             * Format: integer
                             * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                             */
                            "per-hour": number;
                            /** @description Hours in a day in which the schedule triggers. */
                            "hours-of-day": number[];
                            /** @description Days in a week in which the schedule triggers. */
                            "days-of-week": ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                            /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                            "days-of-month"?: number[];
                            /** @description Months in which the schedule triggers. */
                            months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                        } | {
                            /**
                             * Format: integer
                             * @description Number of times a schedule triggers per hour, value must be between 1 and 60
                             */
                            "per-hour": number;
                            /** @description Hours in a day in which the schedule triggers. */
                            "hours-of-day": number[];
                            /** @description Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. */
                            "days-of-month": number[];
                            /** @description Days in a week in which the schedule triggers. */
                            "days-of-week"?: ("TUE" | "SAT" | "SUN" | "MON" | "THU" | "WED" | "FRI")[];
                            /** @description Months in which the schedule triggers. */
                            months?: ("MAR" | "NOV" | "DEC" | "JUN" | "MAY" | "OCT" | "FEB" | "APR" | "SEP" | "AUG" | "JAN" | "JUL")[];
                        };
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was last updated.
                         */
                        "updated-at": string;
                        /** @description Name of the schedule. */
                        name: string;
                        /**
                         * Format: date-time
                         * @description The date and time the pipeline was created.
                         */
                        "created-at": string;
                        /**
                         * @description The project-slug for the schedule
                         * @example gh/CircleCI-Public/api-preview-docs
                         */
                        "project-slug": string;
                        /**
                         * @description Pipeline parameters represented as key-value pairs. Must contain branch or tag.
                         * @example {
                         *       "deploy_prod": true,
                         *       "branch": "feature/design-new-api"
                         *     }
                         */
                        parameters: {
                            [key: string]: number | string | boolean;
                        };
                        /**
                         * User
                         * @description The attribution actor who will run the scheduled pipeline.
                         */
                        actor: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the user.
                             */
                            id: string;
                            /**
                             * Login
                             * @description The login information for the user on the VCS.
                             */
                            login: string;
                            /** @description The name of the user. */
                            name: string;
                        };
                        /** @description Description of the schedule. */
                        description: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique ID of the user. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User login information. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The unique ID of the user.
                         */
                        id: string;
                        /**
                         * Login
                         * @description The login information for the user on the VCS.
                         */
                        login: string;
                        /** @description The name of the user. */
                        name: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getWebhooks: {
        parameters: {
            query: {
                /** @description ID of the scope being used (at the moment, only project ID is supported) */
                "scope-id": string;
                /** @description Type of the scope being used */
                "scope-type": "project";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of webhooks */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /** @description URL to deliver the webhook to. Note: protocol must be included as well (only https is supported) */
                            url: string;
                            /** @description Whether to enforce TLS certificate verification when delivering the webhook */
                            "verify-tls": boolean;
                            /**
                             * Format: uuid
                             * @description The unique ID of the webhook
                             */
                            id: string;
                            /** @description Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request */
                            "signing-secret": string;
                            /**
                             * Format: date-time
                             * @description The date and time the webhook was last updated.
                             * @example 2015-09-21T17:29:21.042Z
                             */
                            "updated-at": string;
                            /** @description Name of the webhook */
                            name: string;
                            /**
                             * Format: date-time
                             * @description The date and time the webhook was created.
                             * @example 2015-09-21T17:29:21.042Z
                             */
                            "created-at": string;
                            /** @description The scope in which the relevant events that will trigger webhooks */
                            scope: {
                                /**
                                 * Format: uuid
                                 * @description ID of the scope being used (at the moment, only project ID is supported)
                                 */
                                id: string;
                                /** @description Type of the scope being used */
                                type: string;
                            };
                            /** @description Events that will trigger the webhook */
                            events: ("workflow-completed" | "job-completed")[];
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    createWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Name of the webhook */
                    name: string;
                    /** @description Events that will trigger the webhook */
                    events: ("workflow-completed" | "job-completed")[];
                    /** @description URL to deliver the webhook to. Note: protocol must be included as well (only https is supported) */
                    url: string;
                    /** @description Whether to enforce TLS certificate verification when delivering the webhook */
                    "verify-tls": boolean;
                    /** @description Secret used to build an HMAC hash of the payload and passed as a header in the webhook request */
                    "signing-secret": string;
                    /** @description The scope in which the relevant events that will trigger webhooks */
                    scope: {
                        /**
                         * Format: uuid
                         * @description ID of the scope being used (at the moment, only project ID is supported)
                         */
                        id: string;
                        /**
                         * @description Type of the scope being used
                         * @enum {string}
                         */
                        type: "project";
                    };
                };
            };
        };
        responses: {
            /** @description A webhook */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description URL to deliver the webhook to. Note: protocol must be included as well (only https is supported) */
                        url: string;
                        /** @description Whether to enforce TLS certificate verification when delivering the webhook */
                        "verify-tls": boolean;
                        /**
                         * Format: uuid
                         * @description The unique ID of the webhook
                         */
                        id: string;
                        /** @description Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request */
                        "signing-secret": string;
                        /**
                         * Format: date-time
                         * @description The date and time the webhook was last updated.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        "updated-at": string;
                        /** @description Name of the webhook */
                        name: string;
                        /**
                         * Format: date-time
                         * @description The date and time the webhook was created.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        "created-at": string;
                        /** @description The scope in which the relevant events that will trigger webhooks */
                        scope: {
                            /**
                             * Format: uuid
                             * @description ID of the scope being used (at the moment, only project ID is supported)
                             */
                            id: string;
                            /** @description Type of the scope being used */
                            type: string;
                        };
                        /** @description Events that will trigger the webhook */
                        events: ("workflow-completed" | "job-completed")[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getWebhookById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the webhook (UUID) */
                "webhook-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A webhook */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description URL to deliver the webhook to. Note: protocol must be included as well (only https is supported) */
                        url: string;
                        /** @description Whether to enforce TLS certificate verification when delivering the webhook */
                        "verify-tls": boolean;
                        /**
                         * Format: uuid
                         * @description The unique ID of the webhook
                         */
                        id: string;
                        /** @description Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request */
                        "signing-secret": string;
                        /**
                         * Format: date-time
                         * @description The date and time the webhook was last updated.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        "updated-at": string;
                        /** @description Name of the webhook */
                        name: string;
                        /**
                         * Format: date-time
                         * @description The date and time the webhook was created.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        "created-at": string;
                        /** @description The scope in which the relevant events that will trigger webhooks */
                        scope: {
                            /**
                             * Format: uuid
                             * @description ID of the scope being used (at the moment, only project ID is supported)
                             */
                            id: string;
                            /** @description Type of the scope being used */
                            type: string;
                        };
                        /** @description Events that will trigger the webhook */
                        events: ("workflow-completed" | "job-completed")[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    updateWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the webhook (UUID) */
                "webhook-id": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Name of the webhook */
                    name?: string;
                    /** @description Events that will trigger the webhook */
                    events?: ("workflow-completed" | "job-completed")[];
                    /** @description URL to deliver the webhook to. Note: protocol must be included as well (only https is supported) */
                    url?: string;
                    /** @description Secret used to build an HMAC hash of the payload and passed as a header in the webhook request */
                    "signing-secret"?: string;
                    /** @description Whether to enforce TLS certificate verification when delivering the webhook */
                    "verify-tls"?: boolean;
                };
            };
        };
        responses: {
            /** @description A webhook */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description URL to deliver the webhook to. Note: protocol must be included as well (only https is supported) */
                        url: string;
                        /** @description Whether to enforce TLS certificate verification when delivering the webhook */
                        "verify-tls": boolean;
                        /**
                         * Format: uuid
                         * @description The unique ID of the webhook
                         */
                        id: string;
                        /** @description Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request */
                        "signing-secret": string;
                        /**
                         * Format: date-time
                         * @description The date and time the webhook was last updated.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        "updated-at": string;
                        /** @description Name of the webhook */
                        name: string;
                        /**
                         * Format: date-time
                         * @description The date and time the webhook was created.
                         * @example 2015-09-21T17:29:21.042Z
                         */
                        "created-at": string;
                        /** @description The scope in which the relevant events that will trigger webhooks */
                        scope: {
                            /**
                             * Format: uuid
                             * @description ID of the scope being used (at the moment, only project ID is supported)
                             */
                            id: string;
                            /** @description Type of the scope being used */
                            type: string;
                        };
                        /** @description Events that will trigger the webhook */
                        events: ("workflow-completed" | "job-completed")[];
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    deleteWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the webhook (UUID) */
                "webhook-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A confirmation message */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    getWorkflowById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unique ID of the workflow.
                 * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                 */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A workflow object. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The ID of the pipeline this workflow belongs to.
                         * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                         */
                        pipeline_id: string;
                        /** Format: uuid */
                        canceled_by?: string;
                        /**
                         * Format: uuid
                         * @description The unique ID of the workflow.
                         */
                        id: string;
                        /**
                         * @description The name of the workflow.
                         * @example build-and-test
                         */
                        name: string;
                        /**
                         * @description The project-slug for the pipeline this workflow belongs to.
                         * @example gh/CircleCI-Public/api-preview-docs
                         */
                        project_slug: string;
                        /** Format: uuid */
                        errored_by?: string;
                        /**
                         * @description Tag used for the workflow
                         * @example setup
                         * @enum {string}
                         */
                        tag?: "setup";
                        /**
                         * @description The current status of the workflow.
                         * @enum {string}
                         */
                        status: "success" | "running" | "not_run" | "failed" | "error" | "failing" | "on_hold" | "canceled" | "unauthorized";
                        /** Format: uuid */
                        started_by: string;
                        /**
                         * Format: int64
                         * @description The number of the pipeline this workflow belongs to.
                         * @example 25
                         */
                        pipeline_number: number;
                        /**
                         * Format: date-time
                         * @description The date and time the workflow was created.
                         */
                        created_at: string;
                        /**
                         * Format: date-time
                         * @description The date and time the workflow stopped.
                         */
                        stopped_at: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    approvePendingApprovalJobById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the job being approved. */
                approval_request_id: string;
                /**
                 * @description The unique ID of the workflow.
                 * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                 */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A confirmation message. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    cancelWorkflow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unique ID of the workflow.
                 * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                 */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A confirmation message. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A human-readable message */
                        message: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    listWorkflowJobs: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unique ID of the workflow.
                 * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                 */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A paginated sequence of jobs. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            /**
                             * Format: uuid
                             * @description The unique ID of the user.
                             */
                            canceled_by?: string;
                            /** @description A sequence of the unique job IDs for the jobs that this job depends upon in the workflow. */
                            dependencies: string[];
                            /**
                             * Format: int64
                             * @description The number of the job.
                             */
                            job_number?: number;
                            /**
                             * Format: uuid
                             * @description The unique ID of the job.
                             */
                            id: string;
                            /**
                             * Format: date-time
                             * @description The date and time the job started.
                             */
                            started_at: string;
                            /** @description The name of the job. */
                            name: string;
                            /**
                             * Format: uuid
                             * @description The unique ID of the user.
                             */
                            approved_by?: string;
                            /**
                             * @description The project-slug for the job.
                             * @example gh/CircleCI-Public/api-preview-docs
                             */
                            project_slug: string;
                            /**
                             * @description The current status of the job.
                             * @enum {string}
                             */
                            status: "success" | "running" | "not_run" | "failed" | "retried" | "queued" | "not_running" | "infrastructure_fail" | "timedout" | "on_hold" | "terminated-unknown" | "blocked" | "canceled" | "unauthorized";
                            /**
                             * @description The type of job.
                             * @enum {string}
                             */
                            type: "build" | "approval";
                            /**
                             * Format: date-time
                             * @description The time when the job stopped.
                             */
                            stopped_at?: string;
                            /**
                             * Format: uuid
                             * @description The unique ID of the job.
                             */
                            approval_request_id?: string;
                        }[];
                        /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
                        next_page_token: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    rerunWorkflow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unique ID of the workflow.
                 * @example 5034460f-c7c4-4c43-9457-de07e2029e7b
                 */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Whether to enable SSH access for the triggering user on the newly-rerun job. Requires the jobs parameter to be used and so is mutually exclusive with the from_failed parameter.
                     * @example false
                     */
                    enable_ssh?: boolean;
                    /**
                     * @description Whether to rerun the workflow from the failed job. Mutually exclusive with the jobs parameter.
                     * @example false
                     */
                    from_failed?: boolean;
                    /**
                     * @description A list of job IDs to rerun.
                     * @example [
                     *       "c65b68ef-e73b-4bf2-be9a-7a322a9df150",
                     *       "5e957edd-5e8c-4985-9178-5d0d69561822"
                     *     ]
                     */
                    jobs?: string[];
                    /**
                     * @description Completes rerun using sparse trees logic, an optimization for workflows that have disconnected subgraphs. Requires jobs parameter and so is mutually exclusive with the from_failed parameter.
                     * @example false
                     */
                    sparse_tree?: boolean;
                };
            };
        };
        responses: {
            /** @description A confirmation message. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: uuid
                         * @description The ID of the newly-created workflow.
                         * @example 0e53027b-521a-4c40-9042-47e72b3c63a3
                         */
                        workflow_id: string;
                    };
                };
            };
            /** @description Error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
        };
    };
    GetOrgClaims: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                orgID: components["parameters"]["OrgID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Claims successfully fetched. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClaimResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["InternalServerError"];
        };
    };
    DeleteOrgClaims: {
        parameters: {
            query: {
                /** @description comma separated list of claims to delete. Valid values are "audience" and "ttl". */
                claims: components["parameters"]["Claims"];
            };
            header?: never;
            path: {
                orgID: components["parameters"]["OrgID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Claims successfully deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClaimResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["InternalServerError"];
        };
    };
    PatchOrgClaims: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                orgID: components["parameters"]["OrgID"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PatchClaimsRequest"];
            };
        };
        responses: {
            /** @description Claims successfully patched. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClaimResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["InternalServerError"];
        };
    };
    GetProjectClaims: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                orgID: components["parameters"]["OrgID"];
                projectID: components["parameters"]["ProjectID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Claims successfully fetched. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClaimResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["InternalServerError"];
        };
    };
    DeleteProjectClaims: {
        parameters: {
            query: {
                /** @description comma separated list of claims to delete. Valid values are "audience" and "ttl". */
                claims: components["parameters"]["Claims"];
            };
            header?: never;
            path: {
                orgID: components["parameters"]["OrgID"];
                projectID: components["parameters"]["ProjectID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Claims successfully deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClaimResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["InternalServerError"];
        };
    };
    PatchProjectClaims: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                orgID: components["parameters"]["OrgID"];
                projectID: components["parameters"]["ProjectID"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PatchClaimsRequest"];
            };
        };
        responses: {
            /** @description Claims successfully patched. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClaimResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["InternalServerError"];
        };
    };
    GetDecisionLogs: {
        parameters: {
            query?: {
                /** @description Return decisions matching this decision status. */
                status?: string;
                /** @description Return decisions made after this date. */
                after?: string;
                /** @description Return decisions made before this date. */
                before?: string;
                /** @description Return decisions made on this branch. */
                branch?: string;
                /** @description Return decisions made for this project. */
                project_id?: string;
                /** @description Return decisions made for this build number. */
                build_number?: string;
                /** @description Sets the offset when retrieving the decisions, for paging. */
                offset?: number;
            };
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Decision logs successfully retrieved. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DecisionLog"][];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["UnexpectedServerError"];
        };
    };
    MakeDecision: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    input: string;
                    metadata?: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Decision rendered by applying the policy against the provided data. Response will be modeled by the data and rego processed. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Decision"];
                };
            };
            /** @description The request is malformed
             *      */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example context: must be a valid value. */
                        error: string;
                    };
                };
            };
            /** @description The request is unauthorized
             *      */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Unauthorized. */
                        error: string;
                    };
                };
            };
            /** @description Something unexpected happened on the server. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example There was an error processing your request. */
                        error: string;
                    };
                };
            };
        };
    };
    GetDecisionSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Decision settings successfully retrieved. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DecisionSettings"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["UnexpectedServerError"];
        };
    };
    SetDecisionSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DecisionSettings"];
            };
        };
        responses: {
            /** @description Decision settings successfully set. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DecisionSettings"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["UnexpectedServerError"];
        };
    };
    GetDecisionLog: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
                decisionID: components["parameters"]["DecisionID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Decision log successfully retrieved. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DecisionLog"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            /** @description There was no decision log found for given decision_id, and owner_id.
             *      */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example decision log not found */
                        error: string;
                    };
                };
            };
            500: components["responses"]["UnexpectedServerError"];
        };
    };
    GetDecisionLogPolicyBundle: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
                decisionID: components["parameters"]["DecisionID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Policy-Bundle retrieved successfully for given decision log ID */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PolicyBundle"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            /** @description There was no decision log found for given decision_id, and owner_id.
             *      */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example decision log not found */
                        error: string;
                    };
                };
            };
            500: components["responses"]["UnexpectedServerError"];
        };
    };
    GetPolicyBundle: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Policy-Bundle retrieved successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PolicyBundle"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            500: components["responses"]["UnexpectedServerError"];
        };
    };
    CreatePolicyBundle: {
        parameters: {
            query?: {
                dry?: boolean;
            };
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BundlePayload"];
            };
        };
        responses: {
            /** @description Policy-Bundle diff successfully returned. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BundleDiff"];
                };
            };
            /** @description Policy-Bundle successfully created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BundleDiff"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            /** @description The request exceeds the maximum payload size for policy bundles ~2.5Mib
             *      */
            413: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example http: request payload too large */
                        error: string;
                    };
                };
            };
            500: components["responses"]["UnexpectedServerError"];
        };
    };
    GetPolicyDocument: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerID: components["parameters"]["OwnerID"];
                context: components["parameters"]["Context"];
                /** @description the policy name set by the rego policy_name rule */
                policyName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Policy retrieved successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Policy"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            /** @description There was no policy that was found with the given owner_id and policy name.
             *      */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example policy not found */
                        error: string;
                    };
                };
            };
            500: components["responses"]["UnexpectedServerError"];
        };
    };
    getContextRestrictions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of a context.
                 * @example be8bb2e3-c3d6-4098-89f4-572ff976ba9a
                 */
                context_id: components["parameters"]["context_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["context_project_restrictions_list"];
                };
            };
            400: components["responses"]["400_invalid_context_id"];
            401: components["responses"]["401_invalid_token"];
            404: components["responses"]["404_entity_not_found"];
            429: components["responses"]["429_rate_limit_exceeded"];
            500: components["responses"]["500_internal_server_error"];
        };
    };
    createContextRestriction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of a context.
                 * @example be8bb2e3-c3d6-4098-89f4-572ff976ba9a
                 */
                context_id: components["parameters"]["context_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "project_id": "405d8375-3514-403b-8c43-83ae74cfe0e9",
                 *       "restriction_type": "project",
                 *       "restriction_value": "405d8375-3514-403b-8c43-83ae74cfe0e9"
                 *     } */
                "application/json": {
                    /**
                     * Format: uuid
                     * @deprecated
                     * @description Deprecated - Use "restriction_type" and "restriction_value"
                     *     instead.
                     *
                     *     The project ID to use for a project restriction. This is
                     *     mutually exclusive with restriction_type and restriction_value
                     *     and implies restriction_type is "project".
                     *
                     */
                    project_id?: string;
                    restriction_type?: string;
                    restriction_value?: string;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["restriction_created"];
                };
            };
            /** @description Bad request. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
            401: components["responses"]["401_invalid_token"];
            404: components["responses"]["404_entity_not_found"];
            /** @description Request conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
            429: components["responses"]["429_rate_limit_exceeded"];
            500: components["responses"]["500_internal_server_error"];
        };
    };
    deleteContextRestriction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of a context.
                 * @example be8bb2e3-c3d6-4098-89f4-572ff976ba9a
                 */
                context_id: components["parameters"]["context_id"];
                /**
                 * @description An opaque identifier of a context restriction.
                 * @example 1c23d2cb-07b1-4a28-8af3-e369732050ed
                 */
                restriction_id: components["parameters"]["restriction_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["restriction_deleted"];
                };
            };
            400: components["responses"]["400_invalid_restriction_id"];
            401: components["responses"]["401_invalid_token"];
            404: components["responses"]["404_entity_not_found"];
            429: components["responses"]["429_rate_limit_exceeded"];
            500: components["responses"]["500_internal_server_error"];
        };
    };
    createProject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.
                 * @example gh
                 */
                provider: components["parameters"]["provider"];
                /**
                 * @description The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).
                 * @example CircleCI-Public
                 */
                organization: components["parameters"]["organization"];
                /**
                 * @description The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).
                 * @example api-preview-docs
                 */
                project: components["parameters"]["project"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["project_settings"];
                };
            };
            400: components["responses"]["400_unexpected_request_body"];
            401: components["responses"]["401_invalid_token"];
            403: components["responses"]["403_permission_denied"];
            /** @description Either a branch or a project were not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
            405: components["responses"]["405_cannot_create_standalone_project"];
            429: components["responses"]["429_rate_limit_exceeded"];
            500: components["responses"]["500_internal_server_error"];
        };
    };
    getProjectSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.
                 * @example gh
                 */
                provider: components["parameters"]["provider"];
                /**
                 * @description The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).
                 * @example CircleCI-Public
                 */
                organization: components["parameters"]["organization"];
                /**
                 * @description The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).
                 * @example api-preview-docs
                 */
                project: components["parameters"]["project"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["project_settings"];
                };
            };
            401: components["responses"]["401_invalid_token"];
            403: components["responses"]["403_permission_denied"];
            404: components["responses"]["404_project_not_found"];
            429: components["responses"]["429_rate_limit_exceeded"];
            500: components["responses"]["500_internal_server_error"];
        };
    };
    patchProjectSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.
                 * @example gh
                 */
                provider: components["parameters"]["provider"];
                /**
                 * @description The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).
                 * @example CircleCI-Public
                 */
                organization: components["parameters"]["organization"];
                /**
                 * @description The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).
                 * @example api-preview-docs
                 */
                project: components["parameters"]["project"];
            };
            cookie?: never;
        };
        /** @description The setting(s) to update, including one or more fields in the JSON object. Note that `oss: true` will only be set on projects whose underlying repositories are actually open source. */
        requestBody: {
            content: {
                /** @example {
                 *       "advanced": {
                 *         "autocancel_builds": false,
                 *         "build_prs_only": true,
                 *         "pr_only_branch_overrides": [
                 *           "main"
                 *         ]
                 *       }
                 *     } */
                "application/json": components["schemas"]["project_settings"];
            };
        };
        responses: {
            /** @description Successful response. Always includes the full advanced settings object. Returned even when the provided updates match the existing settings, but can also be returned when `oss: true` fails to set. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["project_settings"];
                };
            };
            /** @description Request is malformed, e.g. with improperly encoded JSON */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                    };
                };
            };
            401: components["responses"]["401_invalid_token"];
            403: components["responses"]["403_permission_denied"];
            404: components["responses"]["404_project_not_found"];
            429: components["responses"]["429_rate_limit_exceeded"];
            500: components["responses"]["500_internal_server_error"];
        };
    };
    createUsageExport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of an organization.
                 * @example b9291e0d-a11e-41fb-8517-c545388b5953
                 */
                org_id: components["parameters"]["org_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * Format: date-time
                     * @description The start date & time (inclusive) of the range from which data will be pulled. Must be no more than one year ago.
                     */
                    start: string;
                    /**
                     * Format: date-time
                     * @description The end date & time (inclusive) of the range from which data will be pulled. Must be no more than 31 days after `start`.
                     */
                    end: string;
                    shared_org_ids?: string[];
                };
            };
        };
        responses: {
            /** @description Usage export created successfully */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["usage_export_job"];
                };
            };
            400: components["responses"]["400_unexpected_request_body"];
            401: components["responses"]["401_invalid_token"];
            404: components["responses"]["404_entity_not_found"];
            429: components["responses"]["429_rate_limit_exceeded"];
            500: components["responses"]["500_internal_server_error"];
        };
    };
    getUsageExport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description An opaque identifier of an organization.
                 * @example b9291e0d-a11e-41fb-8517-c545388b5953
                 */
                org_id: components["parameters"]["org_id"];
                /**
                 * @description An opaque identifier of a usage export job.
                 * @example e8235eed-f121-4ae3-9c72-2719d6572818
                 */
                usage_export_job_id: components["parameters"]["usage_export_job_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Usage export fetched successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_usage_export_job_status"];
                };
            };
            400: components["responses"]["400_unexpected_request_body"];
            401: components["responses"]["401_invalid_token"];
            404: components["responses"]["404_entity_not_found"];
            429: components["responses"]["429_rate_limit_exceeded"];
            500: components["responses"]["500_internal_server_error"];
        };
    };
}
