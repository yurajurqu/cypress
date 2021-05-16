Feature: EATestFeature
    Test EA features

    Scenario: Test the login feature
        Given I visit the EA Site
        Given I click login link
        # And I login as user with "admin" and "password"
        Given I login as following
            | UserName | Password|
            | admin    | password|

