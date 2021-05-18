Feature: Juliemr Calculator test

@Smoke
Scenario: Addition test with tag
    When I enter inputs as "1" and "2"
    And I select operator "+"
    And I click on go button
    Then I verify result is "4"
    Then I verify result is "4"



